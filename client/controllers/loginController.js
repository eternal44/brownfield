class LoginController {
  constructor() {

  }

  loginFacebook($state) {
    const ref = new Firebase("https://brown-field.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error) {
      if (error) console.log("Login Failed!", error);
      console.log('successful login');
      $state.go('posts');
    });

  }
}
LoginController.$inject = ['$state'];
export { LoginController }
