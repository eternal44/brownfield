module.exports = function(config) {
  config.set({
    basePath: '.',

    frameworks: ['mocha', 'chai'],

    files: [
      './unit/*.js',
    ],

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    // change to chrome if you need chrome
    browsers: ['PhantomJS'],

    singleRun: false,

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter'
    ]
  });
};