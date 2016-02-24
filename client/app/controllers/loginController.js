module.exports = function($scope, $state) {
  $scope.loginFacebook = function(){
    // using 'brown-field' as a firebase instance for now.  Change to 'truu' later
    const ref = new Firebase('https://brown-field.firebaseio.com');
    ref.authWithOAuthPopup('facebook', function(error) {
      if (error) console.log('Login Failed!', error);
      // console.log('successful login');
      $state.go('posts');
    });
  }
};
