const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');

const jslibs = [
	'app/libs/jquery/dist/jquery.min.js',
	'app/libs/bootstrap/dist/js/bootstrap.min.js',
	'app/libs/bootstrap-checkbox/dist/js/bootstrap-checkbox.min.js'
];

const csslibs = [
	'app/libs/normalize-css/normalize.css',
	'app/libs/bootstrap/dist/css/bootstrap.min.css',
	'app/scripts/theme.theme.readable.css',
	'app/scripts/navbar.css',
	'app/scripts/font-awesome.min.css',
	'app/scripts/base.css'
];

gulp.task('csslibs',()=>{
	return gulp.src(csslibs)
	.pipe($.concat('libs.css'))
	.pipe($.cssmin())
	.pipe(gulp.dest('app/css'));
});

gulp.task('jslibs',()=>{

	return gulp.src(jslibs)
	.pipe($.concat('libs.js'))
	.pipe($.uglify())
	.pipe(gulp.dest('app/js'));
});


gulp.task('clean',()=>{
	return del.sync('dist/');
});

gulp.task('default',()=>{

});