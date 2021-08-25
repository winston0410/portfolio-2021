module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-custom-properties'),
		require('autoprefixer'),
		require('cssnano')({ preset: require('cssnano-preset-advanced') })
	]
};
