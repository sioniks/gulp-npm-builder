'use strict';

var sassGlob = require('gulp-sass-glob');

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./source/style/*.sass')
      .pipe($.gp.sassGlob())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.sourcemaps.write())
      //.pipe($.gp.csso()) минифицирует css
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};
