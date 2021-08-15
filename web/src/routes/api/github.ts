import type { EndpointOutput } from '@sveltejs/kit'

const getGithubApi = () => {
   return fetch('https://api.github.com/users/winston0410/repos?sort=updated&per_page=100')
  .then(res => res.json())
}

export async function get () :Promise<EndpointOutput<Array<string>>>{
    return {
        body: (await getGithubApi()).filter((item) => !item.fork && !item.archived && !item.disabled && item.description)
    }
}
