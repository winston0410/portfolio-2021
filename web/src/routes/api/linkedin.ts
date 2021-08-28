import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';
import { handleFetchError, catched } from '$lib/fetch'
import env from '../../env';

//  const fetchOptions = {
	//  headers: {
		//  Authorization: 'Basic ' + Buffer.from(`winston0410:${env.VITE_GITHUB_TOKEN}`).toString('base64')
	//  }
//  };

const getAccessToken = async () => {
	//  return fetch(
		//  'https://api.github.com/users/winston0410/repos?sort=updated&per_page=100',
		//  fetchOptions
	//  ).then(handleFetchError).then((res) => res.json())
};

export const get: RequestHandler<Locals> = async () => {
    return await catched(async () => {
		//  return {
			//  body: filtered
		//  };
    })
};
