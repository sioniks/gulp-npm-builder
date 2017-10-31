'use strict';

module.exports = function() {
  $.gulp.task('morefile', function() {
  	var FilesToCopy = [
    "./source/template/pages/*.txt",
    "./source/template/pages/*.php"
  ];
    return $.gulp.src(FilesToCopy)
      .pipe($.gulp.dest($.config.root));
  });
};
