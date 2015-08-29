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
      'img':'./img/default-adult-img.png',
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
      'img': './img/default-child-img.png',
      'description': 'I would love to help some w/ their programming side projects.',
      'balance' : 25.00
    }
  };

 var commitments = {
    testChild:{
      1:{
        'id'              : 2,
        'user'            : 'test',
        'img'             :'./img/ionic.png',
        'jobname'         : 'Replace Shingle',
        'pay'             : 15.00,
        'category'        : 'home repair',
        'address'         : '1251 Springhill Rd',
        'hours'           : 3,
        'extraInfo'       : 'Wear clothes that can get dirty',
        'ageRestriction'  : 16,
        'startTime'       :'2pm',
        'startDate'       :'09/30'
      },
      currentCount:1
    }
 };

 var dollaDollaBillsYall = {
    testChild:{
      week1:12,
      week2:13,
      week3:2,
      week4:14,
      august:41,
      july:56,
      june:68,
      may:45,
      april:40,
      march:38,
      febuary:39,
      january:43,
      december:58,
      november:29,
      october:47,
      september:32,
      year:536
    }
 };
window.localStorage.dollaDollaBillsYall = JSON.stringify(dollaDollaBillsYall);
window.localStorage.commitments = JSON.stringify(commitments);
window.localStorage.adultAccountInfo = JSON.stringify(adultData);
window.localStorage.childAccountInfo = JSON.stringify(childData);

  var jobs = {
      1 : {
          'id': 1,
          'user': 'test',
          'img':'./img/person_1.png',
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
      3:{
          'id'              : 3,
          'user'            : 'test',
          'img'             :'./img/person_3.png',
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
          'img'             :'./img/person_4.png',
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
    $rootScope.isNotLoggedIn = true;
    if(window.localStorage.userType === "child"){
      $rootScope.isChild = true;
    }
    if(window.localStorage.userType === "adult"){
      $rootScope.isAdult = true;
    }
    if(window.localStorage.userName){
        $rootScope.isNotLoggedIn = false;
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
      if(window.localStorage.userName){
          $rootScope.isNotLoggedIn = false;
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

.controller('LogoutCtrl', function($scope, $state, $rootScope) {

    $scope.logout = function(){
        $rootScope.isChild = false;
        $rootScope.isAdult = false;
    window.localStorage.userType = "";
    window.localStorage.userName = "";
    $rootScope.isNotLoggedIn = true;
    $state.go("login");
    };
})


.controller('RegisterCtrl', function($scope, $state, $rootScope) {
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
      if(window.localStorage.userName){
          $rootScope.isNotLoggedIn = false;
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

.controller('CurrentCollaborationsCtrl', function($scope) {
        $scope.commits = JSON.parse(window.localStorage.commitments);
        $scope.childCommits = $scope.commits[window.localStorage.userName];

})

.controller('KidsBalanceCtrl', function($scope, $state) {
  $scope.dollaDollaBillsYall = JSON.parse(window.localStorage.dollaDollaBillsYall);
  $scope.currentBillsYall = $scope.dollaDollaBillsYall[window.localStorage.userName];
})


.controller('JobDescriptionCtrl', function($scope, $stateParams, $state) {
  console.log($stateParams.jobId);
  $scope.info = JSON.parse(window.localStorage.jobs)[$stateParams.jobId];

  $scope.collaborate = function(){
    $scope.currentCollabs = JSON.parse(window.localStorage.commitments);
    $scope.usersCollabs = $scope.currentCollabs[window.localStorage.userName];
    $scope.currentCount = +$scope.usersCollabs.currentCount;
    $scope.currentCount = $scope.currentCount + 1;
    $scope.usersCollabs[$scope.currentCount] = $scope.info;
    $scope.usersCollabs.currentCount = $scope.currentCount;
    $scope.currentCollabs[window.localStorage.userName] = $scope.usersCollabs;
    window.localStorage.commitments = JSON.stringify($scope.currentCollabs);

    //Delete job from jobs list
    $scope.jobs = JSON.parse(window.localStorage.jobs);
    delete $scope.jobs[$stateParams.jobId];
    window.localStorage.jobs = JSON.stringify($scope.jobs);

    $state.go('currentCollaborations');

  };

})

.controller('SpecificCollabCtrl', function($scope, $stateParams, $state) {
  $scope.collabInfo = JSON.parse(window.localStorage.commitments);
  $scope.userCollabInfo = $scope.collabInfo[window.localStorage.userName][$stateParams.collabId];

  $scope.cancelCollab = function(){
    //Add the current collab to jobs
    //use Id in collab to get id for job
    //delete from current collabs

    $scope.jobs = JSON.parse(window.localStorage.jobs);
    $scope.jobs[$scope.userCollabInfo.id] = $scope.userCollabInfo;
    delete $scope.collabInfo[window.localStorage.userName][$stateParams.collabId];
    window.localStorage.jobs = JSON.stringify($scope.jobs);
    window.localStorage.commitments = JSON.stringify($scope.collabInfo);
    $state.go('opportunities');
  };

});
