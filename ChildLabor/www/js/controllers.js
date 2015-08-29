angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  var adultData = {
    'test':{
      'firstName':'Test',
      'lastName':'McTest',
      'address':'test st',
      'email':'test@test.com',
      'password':'pass4test',
      'img':'../img/ionic.png',
      'description': 'I love working on cars during the weekend.'
    }
  };
  var childData = {
    'testChild':{
      'firstName':'Child',
      'lastName':'McTest',
      'address':'test st',
      'email': 'child@test.com',
      'password': 'pass4child',
      'description': 'I would love to help some w/ their programming side projects.'
    }
  };
  window.localStorage.adultAccountInfo = JSON.stringify(adultData);
  window.localStorage.childAccountInfo = JSON.stringify(childData);

})
.controller('LoginCtrl', function($scope, $state) {
  $scope.userTypes = [
    {text: "Child", value:'child'},
    {text: "Adult", value:'adult'}
  ];
  $scope.data = {userType:"child"};

  $scope.login = function(username, password){
    var loginInfo = {};
    if($scope.data.userType==="adult"){
      loginInfo = JSON.parse(window.localStorage.adultAccountInfo);
    } else {
      loginInfo = JSON.parse(window.localStorage.childAccountInfo);
    }

    if(loginInfo[username] === undefined){
      alert("no such user");
    } else {
      if(loginInfo[username].password === password){
        window.localStorage.userType = $scope.data.userType;
        window.localStorage.userName = username; 
        $state.go("profile");
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
  $scope.userTypes = [
    {text: "Child", value:'child'},
    {text: "Adult", value:'adult'}
  ];
  $scope.data = {userType:"child"};

  $scope.register = function(username, email, password, address, firstName, lastName){
    if($scope.data.userType==="adult"){
      loginType = "adultAccountInfo";
    } else {
      loginType = "childAccountInfo";
    }
    var loginInfo = JSON.parse(window.localStorage[loginType]);
    loginInfo[username] = {
      'firstName':firstName,
      'lastName':lastName,
      'email': email,
      'password': password,
      'address': address,
    };
    window.localStorage[loginType] = JSON.stringify(loginInfo);
    window.localStorage.userType = $scope.data.userType;
    window.localStorage.userName = username; 
    $state.go("profile");
  };
})
.controller('ProfileCtrl', function($scope, $state) {
  var userType = window.localStorage.userType;
  var type = "";
  if(userType==="adult"){
    type = "adultAccountInfo";
  } else {
    type = "childAccountInfo";
  }
  $scope.user = JSON.parse(window.localStorage[type])[window.localStorage.userName];
  console.log($scope.user);
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
