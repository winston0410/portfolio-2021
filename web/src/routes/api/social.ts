import type { RequestHandler } from '@sveltejs/kit';

const getSocialProfile = async () => {
    return [{url: "https://github.com/winston0410", icon_url: ""}, {url: "https://www.linkedin.com/in/hugo-sum", icon_url: ""}]
}

export const get: RequestHandler = async (req) => {
	const data = await getSocialProfile()
	return {
		body: data
	};
};
