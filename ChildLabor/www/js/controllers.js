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
          'jobname': 'Change oil in 1998 VW Golf',
          'pay': 10.00,
          'category': 'automotive',
          'address': '4807 Boulevard Lane',
          'hours': 2,
          'prereq': 'none',
          'tools_needed': 'none',
          'tools_wanted': 'none',
          'extra_info': 'Wear clothes that can get dirty',
          'age_restriction': 'none'
      },
      2:{
          'id'              : 2,
          'jobname'         : 'Replace Shingle',
          'pay'             : 15.00,
          'category'        : 'home repair',
          'address'         : '1251 Springhill Rd',
          'hours'           : 3,
          'prereq'          : 'none',
          'tools_needed'    : 'none',
          'tools_wanted'    : 'none',
          'extra_info'      : 'Wear clothes that can get dirty',
          'age_restriction' : 16
      },
      3:{
          'id'              : 3,
          'jobname'         : 'Make webpage',
          'pay'             : 20.00,
          'category'        : 'computers',
          'address'         : '145 Williman St',
          'hours'           : 3,
          'prereq'          : 'Web development',
          'tools_needed'    : 'none',
          'tools_wanted'    : 'none',
          'extra_info'      : 'I need a webpage to show off my cats',
          'age_restriction' : 'none'
      },
      4: {
          'id'              : 4,
          'jobname': 'as',
          'pay': 20.00,
          'category': 'computers',
          'address': '145 Williman St',
          'hours': 3,
          'prereq': 'Web development',
          'tools_needed': 'none',
          'tools_wanted': 'none',
          'extra_info': 'I need a webpage to show off my cats',
          'age_restriction': 'none'
          }
    };

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
  console.log($scope.user);
})

.controller('AddOpportunityCtrl', function($scope, $state) {

})

.controller('currentOpportunitiesCtrl', function($scope, $state) {

})
.controller('kidsBalanceCtrl', function($scope, $state) {

})

.controller('parentsBalanceCtrl', function($scope, $state) {

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
