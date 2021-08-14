import type { EndpointOutput } from '@sveltejs/kit'

const getCv = () => {
   return fetch('https://swapi.dev/api/people/1')
  .then(response => response.json())
}

export async function get () :Promise<EndpointOutput<{ cv: string}>>{
    return {
        body: {
            cv: await getCv()
        }
    }
}
