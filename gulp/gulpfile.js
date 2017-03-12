/**
 * Created by 13675 on 2017/3/12.
 */
var gulp = require('gulp');
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
    gulp.src('index.html').pipe(gulp.dest('dest'));
});
gulp.task('watch', function () {
    gulp.watch('index.html', ['task1']);
});
gulp.task('copy', function () {
    gulp.src('img/*.png').pipe(gulp.dest('dest/imgs'));
});
gulp.task('severs',function () {

});