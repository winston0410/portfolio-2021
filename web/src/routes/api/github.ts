import { EndpointOutput, Output } from '@sveltejs/kit'

const getGithubApi = async () => {
   return fetch('https://api.github.com/users/winston0410/repos?sort=updated&per_page=100')
  .then(response => response.json())
}

export async function get () :Promise<EndpointOutput<Output>>{
    return {
        body: {
            projects: await getGithubApi()
        }
    }
}
