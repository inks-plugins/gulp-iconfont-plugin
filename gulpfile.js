// gulp-qc-icon 插件测试
var gulp = require('gulp');
var gulpQcIconFont = require('./lib/index')
var del = require('del');

gulp.task('clean', (done) => {
  return del(['test/**/*'], done);
});

gulp.task('qcIconTest', () => {
  return gulpQcIconFont({
    url: '//at.alicdn.com/t/font_1425510_3v068prmkkw.css',
    isDev: false
  }).pipe(gulp.dest('./test/'));
});

gulp.task('default', gulp.series('clean', gulp.parallel('qcIconTest')))
