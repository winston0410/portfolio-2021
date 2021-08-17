module.exports = {
	plugins: [
		require('postcss-custom-properties'),
        //  Not working correctly
		//  require('postcss-calc')({
			//  warnWhenCannotResolve: true
		//  }),
        //  Should be uncessary, if var() can be reduced correctly
        //  require('postcss-variable-compress'),
		require('autoprefixer'),
		require('cssnano')({
            preset: require('cssnano-preset-advanced')
        }),
	]
};
