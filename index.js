'use strict';

var plugins = {
  plumber: require('gulp-plumber'),
  sass: require('gulp-sass'),
  autoprefixer: require('gulp-autoprefixer'),
  watch: require('gulp-watch')
}

module.exports = function (gulp, param) {
  gulp.task('sass:build', function() {
    gulp.src(param.rootFile)
    .pipe(plugins.plumber())
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer({
      browsers: param.prefix ? param.prefix : ['last 2 versions']
    }))
    .pipe(gulp.dest(param.output))
  })

  gulp.task('sass:watch', ['sass:build'], function() {
    plugins.watch(param.watch, function () {
      gulp.start('sass:build')
    })
  })
}
