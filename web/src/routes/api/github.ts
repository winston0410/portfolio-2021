import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';
import { handleFetchError, catched } from '$lib/fetch'
import env from '../../env';
import MarkDownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';

const processMarkdown = (text: string): string => {
    const md = new MarkDownIt()
    md.use(emoji, []);
	return md.renderInline(text);
};

const fetchOptions = {
	headers: {
		Authorization: 'Basic ' + Buffer.from(`winston0410:${env.VITE_GITHUB_TOKEN}`).toString('base64')
	}
};

const getGithubApi = async () => {
	return fetch(
		'https://api.github.com/users/winston0410/repos?sort=updated&per_page=100',
		fetchOptions
	).then(handleFetchError).then((res) => res.json())
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

export const get: RequestHandler<Locals> = async () => {
    return await catched(async () => {
		const githubRes = await getGithubApi();
		const filtered = githubRes
			.filter(
				(item: IGithubRepo) => !item.fork && !item.archived && !item.disabled && item.description
			)
			.map((item: IGithubRepo) => {
				item.description = processMarkdown(item.description);
				return item;
			});

		for (const repo of filtered) {
			repo.languages = await fetch(repo.languages_url, fetchOptions)
				.then(handleFetchError)
				.then((res) => res.json())
		}

		return {
			body: filtered
		};
    })
};
