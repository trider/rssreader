// Karma configuration
// Generated on Sun Jul 05 2015 15:03:15 GMT+0300 (IDT)

module.exports = function(config) {
  config.set({


    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
//    files: [
//     '../www/lib/ionic/js/ionic.bundle.js',
//     '../www/lib/angular-mocks/angular-mocks.js',
//     '../www/lib/ngCordova/dist/ng-cordova.js',
//     '../www/lib/ngCordova/dist/ng-cordova-mocks.js',
//     '../www/js/*.js',
//     '../www/js/services/*.js',
//     '../www/js/controllers/*.js',
//     'data/testdata.js',
//     'specs/*.js'
//    ],

//    list of files / patterns to load in the browser
    files: [
      '../www/lib/ionic/js/ionic.bundle.js',
      '../www/lib/angular-mocks/angular-mocks.js',
      '../www/lib/ngCordova/dist/ng-cordova.js',
      '../www/lib/ngCordova/dist/ng-cordova-mocks.js',
      '../www/js/*.js',
      '../www/js/services/*.js',
      '../www/js/controllers/main.controller.js',
      'specs/controller.tests.js'
    ],


    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    hostname:'localhost',


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
