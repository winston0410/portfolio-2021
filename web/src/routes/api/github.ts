import type { EndpointOutput } from '@sveltejs/kit';

const getGithubApi = () => {
	return fetch('https://api.github.com/users/winston0410/repos?sort=updated&per_page=100').then(
		(res) => res.json()
	);
};

interface IGithubRepo {
    
}

//  JSONResponse is not exported, cannot use custom interface here?
export async function get(): Promise<EndpointOutput<Array<string> | string>> {
	try {
		const res = await getGithubApi();
		const fetchList = [];
		for (const repo of res) {
			fetchList.push(fetch(repo.languages_url));
		}

		//  const languages = await Promise.allSettled(fetchList);
		//  console.log('check langagues', languages);

		return {
			body: res.filter((item) => !item.fork && !item.archived && !item.disabled && item.description)
		};
	} catch (error) {
      return {
          body: "rate limit exceed"
      }
    }
}
