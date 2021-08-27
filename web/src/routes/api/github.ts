import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';
import env from '../../env'

const fetchOptions = {
        headers: {
            Authorization: 'Basic ' + Buffer.from(`winston0410:${env.VITE_GITHUB_TOKEN}`).toString('base64')
        }
}

const getGithubApi = async () => {
	return fetch('https://api.github.com/users/winston0410/repos?sort=updated&per_page=100', fetchOptions).then(
		(res) => res.json()
	);
};

//  interface IGithubRepo {
    
//  }

export const get: RequestHandler<Locals> = async () => {
	try {
		const githubRes = await getGithubApi();
        const filtered = githubRes.filter((item) => !item.fork && !item.archived && !item.disabled && item.description)
        
		for (const repo of filtered) {
            repo.languages = await fetch(repo.languages_url, fetchOptions)
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                return res
            })
            .then(res => res.json())
            .catch(err => {
                return {}
            })
		}

		return {
			body: filtered
		};
	} catch (error) {
      return {
          body: error
      }
    }
}
