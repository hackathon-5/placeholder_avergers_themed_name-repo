// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  //   .state('app', {
  //   url: '/app',
  // cache:false,
  //   abstract: true,
  //   templateUrl: 'templates/menu.html',
  //   controller: 'AppCtrl'
  // })

  .state('search', {
    url: '/search',
    cache:false,
      templateUrl: 'templates/search.html'
  })
  .state('login', {
    url: '/login',
    cache:false,
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('logout', {
    url: '/logout',
    cache:false,
    templateUrl: 'templates/logout.html',
    controller: 'LogoutCtrl'
  })

  .state('register', {
    url: '/register',
    cache:false,
    templateUrl: 'templates/register.html',
    controller: 'RegisterCtrl'
  })
  .state('profile', {
    url: '/profile',
    cache:false,
    templateUrl: 'templates/profile.html',
    controller: 'ProfileCtrl'
  })
  .state('addOpportunity', {
    url: '/addOpportunity',
    cache:false,
    templateUrl: 'templates/newOpportunity.html',
    controller: 'AddOpportunityCtrl'
  })

  .state('currentCollaborations', {
    url: '/currentCollaborations',
    cache:false,
    templateUrl: 'templates/currentCollaborations.html',
    controller: 'CurrentCollaborationsCtrl'
  })

  .state('kidsBalance', {
    url: '/kidsBalance',
    cache:false,
    templateUrl: 'templates/kidsBalance.html',
    controller: 'KidsBalanceCtrl'
  })


  .state('browse', {
      url: '/browse',
      cache:false,
      templateUrl: 'templates/browse.html'
  })
  .state('opportunities', {
    url: '/opportunities',
    cache:false,
    templateUrl: 'templates/opportunities.html',
    controller: 'OpportunitiesCtrl'
  }) 
  .state('specificCollab', {
    url: '/specificCollab/:collabId',
    cache:false,
    templateUrl: 'templates/specificCollab.html',
    controller: 'SpecificCollabCtrl'
  })

  .state('single', {
    url: '/playlists/:playlistId',
    cache:false,
    templateUrl: 'templates/playlist.html',
    controller: 'PlaylistCtrl'
  })

  .state('jobdescription', {
    url: '/jobdescription/:jobId',
    cache:false,
    templateUrl: 'templates/jobdescription.html',
        controller: 'JobDescriptionCtrl'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/opportunities');
});
