module.exports = {
	'**/*.{js,ts}': ['eslint --fix'],
    // TODO Re-enable svelte-check later after @ts-ignore is avaliable
    // REF https://github.com/sveltejs/language-tools/issues/1026
	//  '**/*.{svelte}': ['svelte-check'],
	'**/*.{js,ts,svelte,scss,sass,css}': ['prettier --write']
};
