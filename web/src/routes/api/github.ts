import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';
import env from '../../env'

const getGithubApi = async () => {
	return fetch('https://api.github.com/users/winston0410/repos?sort=updated&per_page=100', {
        headers: {
            Authorization: 'Basic ' + Buffer.from(`winston0410:${env.VITE_GITHUB_TOKEN}`).toString('base64');
        }
    }).then(
		(res) => res.json()
	);
};

//  interface IGithubRepo {
    
//  }

export const get: RequestHandler<Locals> = async () => {
	try {
		const res = await getGithubApi();
		const fetchList = [];
		for (const repo of res) {
			fetchList.push(fetch(repo.languages_url));
		}

		const languages = await Promise.all(fetchList.map((p) => p.then(res => res.json()).catch(e => e)))
        
		console.log('check langagues', languages);

		return {
			body: res.filter((item) => !item.fork && !item.archived && !item.disabled && item.description)
		};
	} catch (error) {
      return {
          body: "rate limit exceed"
      }
    }
}
