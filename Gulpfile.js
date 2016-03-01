var gulp = require('gulp');
var karma = require('karma').server;
var eslint = require('gulp-eslint');

var paths = {
  scripts: ['client/app/*.js', 'client/app/**/*.js'],
  html: ['client/app/views/*.html', 'client/index.html'],
  styles: ['client/styles/scss/*.scss'],
  test: ['tests/**/*.js']
};

gulp.task('unit', function (done) {
  karma.start({
    configFile: __dirname + '/tests/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('eslint', function() {
  return gulp.src(['**/*.js', '!tests/*.js', '!node_modules/**/*.js'])
  .pipe(eslint({
    fix: true
  }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});
