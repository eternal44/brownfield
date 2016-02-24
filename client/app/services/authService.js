module.exports = angular.module('truu.authService', [])
  .factory('Auth', function(){
    var currentUser;
    var loggedIn;

    return {
      setCurrentUser: function(user) {
        // user is an object of user info pulled from fb
        currentUser = user;

        return $http({
          method: 'GET',
          url: 'api/users',
          data(user)
        }).then(function (res) {
          // if 'res' does not return an existing user:

          return $http({
            method: 'Post',
            url: 'api/users',
            data(user)
          })
        });
      },

      currentUser: function() {
        return currentUser;
      },

      isLoggedIn: function(){
        // test to see if this returns undefined if not logged in
        loggedIn = $window.localStorage.getItem('firebase:session::brown-field');
        return loggedIn !== undefined ? true : false;
      },

      logOut: function(){
        $window.localStorage.removeItem('firebase:session::brown-field');
      }
    }
  });
