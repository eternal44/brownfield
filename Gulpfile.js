var gulp = require('gulp');
var connect = require('gulp-connect');
var karma = require('karma').server;
var protractor = require('gulp-protractor').protractor;
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');
var livereload = require('gulp-livereload');

var paths = {
  scripts: ['client/app/*.js', 'client/app/**/*.js'],
  html: ['client/app/views/*.html', 'client/index.html'],
  styles: ['client/styles/scss/*.scss'],
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
  return browserify('./client/app/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./client/build/'))
    .pipe(livereload());
});

// gulp.task('build-css', function() {
//   return gulp.src(paths.styles)
//     .pipe(sass())
//     .pipe(gulp.dest('./client/build/'))
//     .pipe(livereload());
// });

// gulp.task('views', function() {
//   gulp.src('client/index.html')
//   .pipe(gulp.dest('./client/build/'));

//   gulp.src('./client/views/**/*')
//   .pipe(gulp.dest('./client/views/'));
// });

gulp.task('eslint', function() {
  return gulp.src(['**/*.js', '!tests/*.js', '!node_modules/**/*.js'])
  .pipe(eslint({
    fix: true
  }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(paths.scripts, ['browserify']);
  gulp.watch(paths.html, ['browserify']);
});

gulp.task('default', ['browserify', 'watch']);