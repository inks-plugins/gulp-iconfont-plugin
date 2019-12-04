// 引入npm资源
var gulp = require('gulp');
var gulpQcIconFont = require('./index')
var del = require('del');

// 清理输出文件夹
gulp.task('clean-dist', (done) => {
  return del(['dist/**/*'], done);
});

// 插件测试
gulp.task('test-plugin', () => {
  return gulpQcIconFont({
    url: '//at.alicdn.com/t/font_1425510_3v068prmkkw.css',
    isDev: false
  }).pipe(gulp.dest('./dist/'));
});

gulp.task('default', gulp.series('clean-dist', gulp.parallel('test-plugin')))
