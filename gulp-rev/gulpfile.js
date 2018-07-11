/*
* @Author: hc
* @Date:   2018-07-03 10:58:38
* @Last Modified by:   hc
* @Last Modified time: 2018-07-11 16:28:35
*/
var gulp = require('gulp');
var rev = require('gulp-rev');//生成版本号
var revCollector = require('gulp-rev-collector');//替换版本号
var clean = require('gulp-clean');
var gulpSequence = require('gulp-run-sequence')

gulp.task("clean",function(){
	gulp.src('./dest/*')
	.pipe(clean())
})

gulp.task('copy-img',function(){
	return gulp.src("./app/img/*")
	.pipe(gulp.dest('./dest/img'))
})

gulp.task('copy-font',function(){
	return gulp.src("./app/font/*")
	.pipe(gulp.dest('./dest/font'))
})

gulp.task('rev-css',function() {
	return gulp.src('./app/**/*.css')
	.pipe(rev())
	.pipe(gulp.dest('./dest'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('./dest/rev/css'))

})

gulp.task('rev-js',function() {
	return gulp.src('./app//**/*.js')
	.pipe(rev())
	.pipe(gulp.dest('./dest'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('./dest/rev/js'))

})

gulp.task('revCollector', function(){
	return gulp.src(['dest/rev/**/*.json','./app/*.html'])
	.pipe(revCollector({
		replaceReved: true
	
	}))
	.pipe(gulp.dest('./dest'))
})




gulp.task('default',['clean'],gulpSequence('copy-img','copy-font','rev-js','rev-css','revCollector'))