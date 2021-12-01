import type { RequestHandler } from '@sveltejs/kit';

const pages = [
	{ name: 'Opensource', url: '/pages/opensource' },
	{ name: 'Resume', url: '/pages/resume' },
	//  { name: 'Blog', url: '/blog' }
];

export const get: RequestHandler = async () => {
	return {
		body: pages
	};
}
