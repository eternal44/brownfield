module.exports = angular.module('truu.loginController', [])
  .controller('LoginController', function($scope, $state, Auth) {
    $scope.loginFacebook = function(){

      // TODO:  Change to 'truu' later.  using 'brown-field' as a firebase instance for now.
      const ref = new Firebase('https://brown-field.firebaseio.com');
      ref.authWithOAuthPopup('facebook', function(error, authData) {
        if (error) console.log('Login Failed!', error);
        console.log('successful login');

        Auth.setCurrentUser(authData.facebook.cachedUserProfile);
        $state.go('posts');
      });
    }
  });
