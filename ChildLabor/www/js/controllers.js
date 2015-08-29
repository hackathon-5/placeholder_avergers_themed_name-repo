angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {

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

  var jobs = {
      1 : {
          'id': 1,
          'user': 'test',      
          'img':'../img/ionic.png',
          'jobname': 'Change oil in 1998 VW Golf',
          'pay': 10.00,
          'category': 'automotive',
          'address': '4807 Boulevard Lane',
          'hours': 2,
          'extraInfo': 'Wear clothes that can get dirty',
          'ageRestriction': 'none',
          'startTime':'6pm',
          'startDate':'08/30'
      },
      2:{
          'id'              : 2,
          'user'            : 'test',
          'img'             :'../img/ionic.png',
          'jobname'         : 'Replace Shingle',
          'pay'             : 15.00,
          'category'        : 'home repair',
          'address'         : '1251 Springhill Rd',
          'hours'           : 3,
          'extraInfo'      : 'Wear clothes that can get dirty',
          'ageRestriction' : 16,
          'startTime':'2pm',
          'startDate':'09/30'
      },
      3:{
          'id'              : 3,
          'user'            : 'test',
          'img'             :'../img/ionic.png',
          'jobname'         : 'Make webpage',
          'pay'             : 20.00,
          'category'        : 'computers',
          'address'         : '145 Williman St',
          'hours'           : 3,
          'extraInfo'      : 'I need a webpage to show off my cats',
          'ageRestriction' : 'none',
          'startTime':'4pm',
          'startDate':'09/30'
      },
      4: {
          'id'              : 4,
          'user'            : 'test',
          'img'             :'../img/ionic.png',
          'jobname': 'as',
          'pay': 20.00,
          'category': 'computers',
          'address': '145 Williman St',
          'hours': 3,
          'extraInfo': 'I need a webpage to show off my cats',
          'ageRestriction': 'none',
          'startTime':'8am',
          'startDate':'09/30'
          }
    };
    window.localStorage.jobsCount = 4;
    window.localStorage.jobs = JSON.stringify(jobs);

    //Checking if user is logged in
    //So as to display the correct side menu options
    $rootScope.isChild = false;
    $rootScope.isAdult = false;
    if(window.localStorage.userType === "child"){
      $rootScope.isChild = true;
    }
    if(window.localStorage.userType === "adult"){
      $rootScope.isAdult = true;
    }

})
.controller('LoginCtrl', function($scope, $state, $rootScope) {
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
        if($scope.data.userType === "child"){
          $rootScope.isChild = true;
        }
        if($scope.data.userType === "adult"){
          $rootScope.isAdult = true;
        }
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
.controller('RegisterCtrl', function($scope, $rootScope) {
  $scope.userTypes = [
      {text: "Child", value: 'child'},
      {text: "Adult", value: 'adult'}
  ];
  $scope.data = {userType: "child"};


  $scope.register = function (username, email, password, address, firstName, lastName) {
      if ($scope.data.userType === "adult") {
          loginType = "adultAccountInfo";
      } else {
          loginType = "childAccountInfo";
      }
      var loginInfo = JSON.parse(window.localStorage[loginType]);
      loginInfo[username] = {
          'firstName': firstName,
          'lastName': lastName,
          'email': email,
          'password': password,
          'address': address,
      };
      window.localStorage[loginType] = JSON.stringify(loginInfo);
      window.localStorage.userType = $scope.data.userType;
      window.localStorage.userName = username;
      if($scope.data.userType === "child"){
        $rootScope.isChild = true;
      }
      if($scope.data.userType === "adult"){
        $rootScope.isAdult = true;
      }
      $state.go("profile");
  };
})
.controller('OpportunitiesCtrl', function($scope) {
  var alljobs = window.localStorage.jobs;
  if(alljobs) {
      $scope.jobs = angular.fromJson(alljobs);
  }
  return [];
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
})

.controller('AddOpportunityCtrl', function($scope, $state) {
  //Get info from html to add to Jobs √
  //Get Address from userAccountInfo. √
  //User jobCount to create global id
  //Increment global id
  //Cooking, Baking, Automotive, Computer, Programming, Home √
  $scope.categories = [
    {id: 'Automotive'},
    {id: 'Baking'},
    {id: 'Computer'},
    {id: 'Cooking'},
    {id: 'Home'},
    {id: 'Programming'}
  ];
  var userType = window.localStorage.userType;
  var type = "";
  if(userType==="adult"){
    type = "adultAccountInfo";
  } else {
    type = "childAccountInfo";
  }
  $scope.user = JSON.parse(window.localStorage[type])[window.localStorage.userName];
  $scope.data = {};
  $scope.data.category = "Automotive";
  $scope.addNewOpportunity = function(){
    console.log($scope.data);
    $scope.data.address = $scope.user.address;
    $scope.data.user = window.localStorage.userName;
    $scope.data.img = $scope.user.img;
    $scope.jobs = JSON.parse(window.localStorage.jobs);
    $scope.jobCount = +window.localStorage.jobsCount;
    $scope.jobCount = $scope.jobCount + 1;
    console.log($scope.jobCount);
    $scope.data.id = $scope.jobCount;
    $scope.jobs[$scope.jobCount] = $scope.data;
    console.log($scope.jobs);
    window.localStorage.jobsCount = $scope.jobCount;
    window.localStorage.jobs = JSON.stringify($scope.jobs);

    $scope.data = {};
    $scope.data.category = "Automotive";
    $state.go('opportunities');
  };
})

.controller('JobDescriptionCtrl', function($scope, $stateParams) {
  console.log($stateParams.jobId);
  var allinfo = window.localStorage.jobs;
  if(allinfo) {
      $scope.info = angular.fromJson(allinfo)[$stateParams.jobId];
      console.log($scope.info);
  }
  return [];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  });
