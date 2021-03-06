import type { RequestHandler } from '@sveltejs/kit';
import env from '$lib/env';
import MarkDownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';

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

const getGithubApi = (page: number = 1) => {
	return fetch(
		`https://api.github.com/users/winston0410/repos?sort=updated&per_page=99&type=sources&page=${page}`,
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
		const githubRes = await getGithubApi();
		const githubRes2 = await getGithubApi(2);

        if (!githubRes.ok || !githubRes2.ok) {
            return {
                status: 400,
                body: null
            }
        }

		const body = await githubRes.json()
		const body2 = await githubRes2.json()

		const combined = [...body, ...body2]
        
		const filtered = (combined)
			.filter(
				(item: IGithubRepo) => !item.fork && !item.archived && !item.disabled && item.description
			)
			.map((item: IGithubRepo) => {
				item.description = processMarkdown(item.description);
				return item;
			});

		for (const repo of filtered) {
			repo.languages = await fetch(repo.languages_url, fetchOptions).then((res) => res.json());
		}

		return {
			body: filtered
		};
	} catch (e) {
		console.log(e);
        return {
            status: 500
        }
	}
};
