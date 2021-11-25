export const getLangColorName = (lang: string): string => {
	const langHash = {
		'C++': 'cpp',
		'Vim script': 'vim_script'
	};

	return langHash[lang] ?? lang.toLowerCase();
};
