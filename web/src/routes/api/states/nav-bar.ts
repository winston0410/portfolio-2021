import type { EndpointOutput } from '@sveltejs/kit'

const pages = [{ name: "opensource", url: "/opensource"}, {name: "My curriculum vitae", url: "/cv"}];

export async function get () :Promise<EndpointOutput<{ pages: Array<{ name: string, url: string}> }>>{
    return {
        body: {
            pages: pages
        }
    }
}
