var path = require('path'),
config = require("./gulp/config.json");

module.exports = {
	entry: {
		App: "./user/themes/" + config.theme + "/assets/scripts/app.js",
		Vendor: "./user/themes/" + config.theme + "/assets/scripts/Vendor.js"
	},
	output: {
		path: __dirname + "/user/themes/" + config.theme + "/assets/compiled/scripts",
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ["es2015"]
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}