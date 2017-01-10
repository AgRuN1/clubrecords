const webpack = require('webpack');
const path = require('path');
module.exports = {
	context: path.join(__dirname, 'app','babel'),
	entry: {
		main: './main.js',
		checkAuth: './checkAuth.js',
		settings: './settings.js',
		'addaudio':'./addaudio.js'
	},
	output: {
		path: __dirname+'/app/js',
		filename: '[name].js',
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 100
	},
	devtool: 'source-map',
	module: {
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				loader: 'style!css!postcss!stylus'
			},
			{
			  test   : /\.(jpg|png|gif)$/,
			  exclude: /node_modules/,
			  loader : 'url'
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			warning: false,
			drop_controls: true,
			unsafe: true
		})
	]
}