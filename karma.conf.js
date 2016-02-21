import path from 'path';
import webpackConfig from './webpack.config';
const entry = path.resolve(webpackConfig.context, webpackConfig.entry);
let preprocessors = {}; 
preprocessors[entry] = ['webpack'];
preprocessors['**/*.html'] = ['ng-html2js'];

export default config => {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [entry],

    webpack: webpackConfig,

    exclude: [],

    reporters: ['progress', 'mocha'],

    preprocessors: preprocessors,

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    ngHtml2JsPreprocessor: { 
      stripPrefix: 'client/views/', 
      moduleName: 'my.templates' 
    },

    browsers: ['Chrome Canary'],

    singleRun: false,

    plugins: [
      'karma-webpack',
      'karma-chai',
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor',
      'karma-mocha-reporter'
    ]
  });
}