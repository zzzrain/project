var webpack = require('webpack')
module.exports = {
	//入口文件
	entry: __dirname + "/main.js",
	//导出文件
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	// 加载器
	module: {
		loaders: [{
			test: /\.js$/ ,
			loader: "babel-loader"
		},{
			test: /\.css$/ ,
			loader: "css-loader"
		},{
			// vue-loader、vue-template-compiler
			test: /\.vue$/ ,
			loader: "vue-loader"
		}]
	},
	//vue2.0加上这句，然后暴露全局的vue函数
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		}
	},
	// 服务器
	devServer:{
		contentBase: "./src",
		// 监听
		inline: true
	},
	// 代码压缩
	plugins: [
		//new webpack.optimize.UglifyJsPlugin()
	]
}