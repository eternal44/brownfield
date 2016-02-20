angular.module('brownfield', [
  'ui.router',
  'brownfield.signUpController',
  'brownfield.postsController'
])

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
  .state('signup', {
    url: '/signup',
    templateUrl: '/views/signup.html',
    controller: 'SignUpController'
  })
  .state('posts', {
    url: '/posts',
    templateUrl: '/views/posts.html',
    controller: 'PostsController'
  });

  $urlRouterProvider.otherwise('signup');
});

