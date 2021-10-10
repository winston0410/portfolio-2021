import type { RequestHandler } from '@sveltejs/kit';
import type { ISocialProfile } from '$lib/typing';

const getSocialProfile = async (): Promise<Array<ISocialProfile>> => {
	return [
		{ url: 'https://github.com/winston0410', icon_url: '/github-brands.svg', name: 'github' },
		{
			url: 'https://www.linkedin.com/in/hugo-sum',
			icon_url: '/linkedin-brands.svg',
			name: 'linkedin'
		}
	];
};

export const get: RequestHandler = async (req) => {
	const data = await getSocialProfile();
	return {
		body: data
	};
};
