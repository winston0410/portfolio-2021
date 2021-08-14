interface Props {
    [key: string]: string
}

interface PromiseTable<T> {
    [key:string]: Promise<T>
}

interface ResolvedResponse<T> {
    status: "fulfilled",
    value: T
}

interface RejectedResponse {
    status: "rejected",
    reason: string
}

interface UnwrappedTable<T> {
    [key:string]: ResolvedResponse<T> | RejectedResponse
}

const allPromiseSettled = <T>(t: PromiseTable<T>): Promise<UnwrappedTable<T>> => {
    const result = {}
    let index = 0
    return new Promise(resolve => {
        for (const key in t) {
            Promise.resolve(t[key])
            .then(res => {
                result[key] = { status: "fulfilled", value: res }
                index ++
            }).catch(err => {
                result[key] = { status: "rejected", reason: err }
                index ++
            }).finally(() => {
                if (index === Object.keys(t).length) {
                    resolve(result)
                }
            })
        }
    })
}

const getProps = (props :Props) => async ({ fetch }) => {
    const wrapped = {}
    for (const key in props) {
        wrapped[key] = fetch(props[key]).then(res => res.json())
    }
    
    const unwrapped = await allPromiseSettled(wrapped as unknown as PromiseTable<string>)

    return { props: unwrapped };
}

export { getProps }
