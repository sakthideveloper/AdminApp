'use strict';

/**
 * @ngdoc overview
 * @name wedlockAdminApp
 * @description
 * # wedlockAdminApp
 *
 * Main module of the application.
 */
angular
  .module('wedlockAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angular-storage',
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider

     .state('/', {
        url: "/main",
        views: {
        "header@": { 
          templateUrl: "views/header.html" 
        },
        "content@": { 
         templateUrl: 'views/main.html',
         controller: 'MainCtrl',
         controllerAs: 'main'
        }
      }
      })
     .state('/about', {
        url: "/about",
         views: {
        "header@": { 
          templateUrl: "views/header.html" 
        },
        "content@": { 
          templateUrl: "views/about.html",
          controller: 'AboutCtrl',
          controllerAs: 'about' 
        }
      }
      })
      .state('/login', {
        url: "/login",
          views: {
     
        "content@": { 
          templateUrl: "views/login.html",
          controller: 'loginCtrl',
          controllerAs: 'login' 
        }
      }
        
      })
       .state('/signup', {
        url: "/signup",
         views: {
     
        "content@": { 
          templateUrl: "views/signup.html",
          controller: 'SignupCtrl',
          controllerAs: 'signup' 
        }
      }
      })

      $urlRouterProvider.otherwise("/login");

      $httpProvider.interceptors.push(function ($q, $location) {
            return {
                responseError: function (rejection) {
                    console.log("Redirect");
                    if (rejection.status == 401 && $location.path() !== '/login' && $location.path() !== '/signup') {
                        $location.nextAfterLogin = $location.path();
                        $location.path('/login');
                     }
                    return $q.reject(rejection);
                }
            };
        });

  });


