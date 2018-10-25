/*
* @Author: hc
* @Date:   2018-06-25 09:21:19
* @Last Modified by:   hc
* @Last Modified time: 2018-06-25 15:07:36
*/
var gulp = require('gulp'),
	clean = require('gulp-clean'),
	connect = require('gulp-connect');
	sass = require('gulp-sass');

gulp.task("clean",function(){
	gulp.src(['dest'])
	.pipe(clean())
})

gulp.task('sass',function(){
	return gulp.src('./app/sass/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./app/css'))
})


gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/*.scss', ['sass','reload']);
});


gulp.task('connect',function(argument) {
	connect.server({
		root: 'app',
	    livereload: true
	})
})

gulp.task("watch",function(){
	gulp.watch("app/*.html",["reload"]);
	gulp.watch("app/css/*.css",["reload"])
})

gulp.task("reload",function(){
	gulp.src("app/*.html")
	.pipe(connect.reload())
})

gulp.task('default',['clean','sass','sass:watch','connect','watch'])