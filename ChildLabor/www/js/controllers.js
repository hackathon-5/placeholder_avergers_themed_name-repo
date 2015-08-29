  angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  var testData = {
    'test':{
      'address':'test st',
      'email':'test@test.com',
      'password':'pass4test'
    }
  };
  window.localStorage.loginInformation = JSON.stringify(testData);
})
.controller('LoginCtrl', function($scope, $state) {
  $scope.login = function(username, password){
    var testInfo = JSON.parse(window.localStorage.loginInformation);
    if(testInfo[username] === ""){
      alert("no such user");
    } else {
      if(testInfo[username].password === password){
        alert("loggedIn");
      } else {
        alert("Wrong password");
      }
    }
  };

  $scope.toRegisterPage = function(){
    $state.go("register");
  };

})
.controller('RegisterCtrl', function($scope) {
  $scope.register = function(username, email, password, address){
    var loginInfo = JSON.parse(window.localStorage.loginInformation);
    loginInfo[username] = {
      'email': email,
      'password': password,
      'address': address,
    };
    window.localStorage.loginInformation = JSON.stringify(loginInfo);
    console.log(JSON.parse(window.localStorage.loginInformation));
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
