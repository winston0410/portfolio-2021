import type { RequestHandler } from '@sveltejs/kit';
import env from '$lib/env';
import MarkDownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';
//  import createFetch from 'wrapped-fetch';

const processMarkdown = (text: string): string => {
	const md = new MarkDownIt();
	md.use(emoji, []);
	return md.renderInline(text);
};

const fetchOptions = {
	headers: {
		Authorization: 'Basic ' + Buffer.from(`winston0410:${env.VITE_GITHUB_TOKEN}`).toString('base64')
	}
};

const getGithubApi = async (f) => {
	return await f(
		'https://api.github.com/users/winston0410/repos?sort=updated&per_page=100',
		fetchOptions
	);
};

interface IGithubRepo {
	name: string;
	description: string;
	html_url: string;
	languages_url: string;
	fork: boolean;
	archived: boolean;
	disabled: boolean;
}

export const get: RequestHandler = async () => {
	try {
		//  const f = createFetch();

		const githubRes = await getGithubApi(fetch);
		//  const filtered = githubRes.body
		const filtered = (await githubRes.json())
			.filter(
				(item: IGithubRepo) => !item.fork && !item.archived && !item.disabled && item.description
			)
			.map((item: IGithubRepo) => {
				item.description = processMarkdown(item.description);
				return item;
			});

		for (const repo of filtered) {
			//  repo.languages = (await f(repo.languages_url, fetchOptions)).body;
			repo.languages = await fetch(repo.languages_url, fetchOptions).then((res) => res.json());
		}

		return {
			body: filtered
		};
	} catch (e) {
		console.log(e);
	}
};
