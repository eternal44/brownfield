import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { PostsController } from './controllers/postsController';
import { SignUpController } from './controllers/signUpController';

export default angular.module('brownfield', [
  uiRouter
])

.controller('PostsController', PostsController)
.controller('SignUpController', SignUpController)

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('signup');

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

})

