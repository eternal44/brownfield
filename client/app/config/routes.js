module.exports = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'app/views/landing.html',
      controller: 'LandingController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/views/login.html',
      controller: 'LoginController',
    })
    .state('posts', {
      url: '/posts',
      templateUrl: 'app/views/posts.html',
      controller: 'PostsController'
    });

}