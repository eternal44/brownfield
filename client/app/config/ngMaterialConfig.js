module.exports = function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('blue', {
      'default': '200' 
    });
}