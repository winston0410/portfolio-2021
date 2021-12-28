import type { RequestHandler } from '@sveltejs/kit';
import cp from 'child_process';

export const get: RequestHandler = async () => {
	const version = cp.execSync('git rev-parse HEAD').toString().trim().slice(0, 7);

    const generated_at = Date.now()

    const body = {
        version,
        generated_at
    }

	return {
		body
	};
};
