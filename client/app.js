var app = angular.module('MyApp', ['ngRoute', 'satellizer']);

app.config(function($routeProvider, $authProvider, $locationProvider) {

  // *** satellizer settings *** //
  $authProvider.github({
    //updated
    // clientId: 'ADD CLIENT ID',
    url: '/auth/github',
    clientId: '042326637f66ae183924',
    ///updated
    // redirectUri: 'UPDATE',
    redirectUri: window.location.origin
  });
  // Google
  $authProvider.google({
    url: '/auth/google',
    clientId: '678328026959-9h891tki30q2023qipuv5ojurki8rsui.apps.googleusercontent.com',
    redirectUri: window.location.origin
  });

  $routeProvider
    .when('/', {
      templateUrl: 'partials/welcome.html'
    })
    .when('/home', {
      templateUrl: 'partials/home.html'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    .when('/signup', {
      templateUrl: 'partials/signup.html',
      controller: 'signupCtrl'
    })
    .otherwise('/');

});
