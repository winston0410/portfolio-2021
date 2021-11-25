import type { RequestHandler } from '@sveltejs/kit';

const getSocialProfile = async () => {
	return [
		{ url: 'https://github.com/winston0410', icon_url: '/github-brands.svg', name: 'github' },
		{
			url: 'https://www.linkedin.com/in/hugo-sum',
			icon_url: '/linkedin-brands.svg',
			name: 'linkedin'
		}
	];
};

export const get: RequestHandler = async () => {
	const data = await getSocialProfile();
	return {
		body: data
	};
};
