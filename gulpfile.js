var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('watch', function() {

  // Create LiveReload server
  livereload.listen();

  // Watch any assets, content-files or templates, reload on change
  gulp.watch(['site/**', 'assets/**', 'content/**']).on('change', livereload.changed);

});