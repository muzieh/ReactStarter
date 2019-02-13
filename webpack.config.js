const path = require('path');

module.exports = {
	resolve: {
		modules: [
			path.resolve('./lib'),
			path.resolve('./node_modules'),
		],
	},
	mode: 'development',
	entry: ['./lib/renderers/dom.js', '@babel/polyfill'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [{ test: /\.js$/, use: 'babel-loader' }],
	},
};
