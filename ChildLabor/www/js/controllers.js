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

    var jobs = {
            1 : {
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
          var alljobs = window.localStorage['jobs'];
          if(alljobs) {
              $scope.jobs = angular.fromJson(alljobs);
              console.log($scope.jobs);
          }
          return [];
      })

      .controller('PlaylistCtrl', function($scope, $stateParams) {
      });
