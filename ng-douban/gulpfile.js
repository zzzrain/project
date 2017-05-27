//gulp核心文件
var gulp = require("gulp");
//gulp压缩js的模块
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("minify", function() {
	//导入
	return gulp.src(['index.js'])
		//合并
		//.pipe(concat("main.js"))
		//压缩
		.pipe(uglify())
		//导出
		.pipe(gulp.dest('js'))
})
//监听js的改变
/*gulp.task("watch",function(){
	gulp.watch("index.js", ["minify"])
})*/
gulp.task("default", ["minify"])
gulp.watch("index.js", ["minify"])