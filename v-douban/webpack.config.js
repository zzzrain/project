var webpack = require('webpack');
module.exports = {
	devtool:"source-map",
	entry:__dirname+"/main.js",
	output:{
		path:__dirname+"/src",
		filename:"bundle.js"
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		}
	},
	module:{
		loaders:[{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:"babel-loader"
		},{
			test:/\.vue$/,
			loader:"vue-loader"
		},{
			test:/\.css$/,
			// loader顺序不能改
			loader:"style-loader!css-loader"
		},{
			test:/\.scss$/,
			loader:"sass-loader"
		},{
			test:/\.(jpg|png|gif|jpeg)$/,
			loader:"url-loader"
		},{
			test:/\.(svg|ttf|woff|eot)$/,
			loader:"file-loader"
		}]
	},
	devServer:{
		contentBase:"src",
		inline:true
	},
	plugins:[]
}
