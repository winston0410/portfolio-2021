import type { EndpointOutput } from '@sveltejs/kit'

const getGithubApi = () => {
   //  return fetch('https://api.github.com/users/winston0410/repos?sort=updated&per_page=100')
   return fetch('https://swapi.dev/api/people/1')
  .then(response => response.json())
}

export async function get () :Promise<EndpointOutput<{ projects: string }>>{
    return {
        body: {
            projects: await getGithubApi()
        }
    }
}
