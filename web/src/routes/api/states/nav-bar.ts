import type { RequestHandler } from '@sveltejs/kit';

const pages = [
	{ name: 'Resume', url: '/pages/resume' },
	{ name: 'Opensource', url: '/pages/opensource' },
	{ name: 'Commercial works', url: '/pages/commercial' },
	//  { name: 'Blog', url: '/blog' }
];

export const get: RequestHandler = async () => {
	return {
		body: pages
	};
}
