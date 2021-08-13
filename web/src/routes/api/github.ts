import { EndpointOutput, Output } from '@sveltejs/kit'

//  const getGithubApi = async () => {

//  }

export async function get () : Promise<EndpointOutput<Output>>{
    return {
        body: {
            hello: "world"
        }
    }
}
