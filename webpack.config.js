module.exports = {
	entry: './src/Apps.js',
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		loader: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};