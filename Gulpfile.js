var gulp = require('gulp');
var connect = require('gulp-connect');
var karma = require('karma').server;
var protractor = require('gulp-protractor').protractor;
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');

var paths = {
  // all our client app js files, not including 3rd party js files
  scripts: ['client/**/*.js'],
  html: ['client/views/**/*.html', 'client/index.html'],
  styles: ['client/styles/scss/**/*.scss'],
  test: ['tests/**/*.js']
};

gulp.task('connect', function() {
  connect.server({
    root: 'client/',
    port: 8888
  });
});

gulp.task('unit', function (done) {
  karma.start({
    configFile: __dirname + '/tests/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('e2e', function() {
  var args = ['--baseUrl', 'http://127.0.0.1:8888'];
  gulp.src(['./tests/e2e/*.js'])
    .pipe(protractor({
      configFile: 'tests/protractor.conf.js',
      args: args
    }))
    .on('error', function(err) { throw err; });
});

gulp.task('browserify', function() {
  return browserify('./client/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./client/build/'))
});

gulp.task('build-css', function() {
  return gulp.src(paths.styles)
    .pipe(sass())
    .pipe(gulp.dest('./client/build/'));
});

gulp.task('eslint', function() {
  return gulp.src(['**/*.js', '!tests/*.js', '!node_modules/**/*.js'])
  .pipe(eslint({
    fix: true
  }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('default', ['connect']);