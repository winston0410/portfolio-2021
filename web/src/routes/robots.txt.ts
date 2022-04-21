import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	return {
		headers: {
			'Content-Type': 'text/plain'
		},
		body: `User-agent: *
Disallow: /`
	};
};