var webpack = require('webpack')
module.exports = {
	//用于调试，告知错误
	devtool:"source-map",
	//入口文件
	entry: __dirname + "/main.js",
	//导出文件
	output: {
		path: __dirname + "/src",
		filename: "bundle.js"
	},
	//vue2.0加上这句，然后暴露全局的vue函数
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		}
	},
	// 加载器
	module: {
		loaders: [{
			test: /\.js$/ ,
			loader: "babel-loader"
		},{
			test: /\.vue$/ ,
			loader: "vue-loader"
		},{
			test: /\.(ttf|svg|woff|eot)$/,
			loader: "file-loader"
		}]
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