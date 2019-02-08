const path = require('path');

module.exports = {
	mode: 'development',
	entry: ['./lib/components/Index.js', '@babel/polyfill'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [{ test: /\.js$/, use: 'babel-loader' }],
	},
};
