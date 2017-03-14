/**
 * Created by 13675 on 2017/3/12.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
// gulp.task('hell0',function () {
//
// });
gulp.task('test', function () {
    console.log('hha');
});

gulp.task('test2', function () {
    console.log('hhe');
});
gulp.task('default', ['test', 'test2']);

gulp.task('task1', function () {
    gulp.src('index.html').pipe(gulp.dest('dest')).pipe(connect.reload());
});
gulp.task('watch', function () {
    gulp.watch('index.html', ['task1']);
});
gulp.task('copy', function () {
    gulp.src('img/*.png').pipe(gulp.dest('dest/imgs'));
});
gulp.task('sass',function () {
     gulp.src('sass/*.scss').pipe(sass()).pipe(uglify()).pipe(gulp.dest('dest/sass'));
});

gulp.task('severs',function () {
    connect.server({

       root:'dest',
        livereload:true
    })
});

gulp.task('a',['watch','severs']);
