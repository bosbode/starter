var path = require('path'),
UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
config = require('./gulp/config.json');

module.exports = {
	mode: 'none',
	entry: {
		App: './user/themes/' + config.theme + '/assets/scripts/App.js',
		Vendor: './user/themes/' + config.theme + '/assets/scripts/Vendor.js'
	},
	output: {
		path: __dirname + '/user/themes/' + config.theme + '/assets/compiled/scripts',
		filename: '[name].js'
	},
	module: {
		rules: [{ 
			test: require.resolve('jquery'), 
			use: [{ 
				loader: 'expose-loader', 
				options: 'jQuery' 
			}, 
			{ 
				loader: 'expose-loader', 
				options: '$' 
			}],
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}
		}]
	},
	plugins: [
    new UglifyJsPlugin()
  ]
}