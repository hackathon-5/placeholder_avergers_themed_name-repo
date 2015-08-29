angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  var adultData = {
'rataskoskr':{
  'firstName':'Ronak',
  'lastName':'Raithatha',
  'address':'1400 South St',
  'email':'ronak@gmail.com',
  'password':'pass4ron',
  'img':'../img/default-adult-img.png',
  'description': 'I love working on cars during the weekend.'
},
  'nations':{
      'firstName':'Brian',
      'lastName':'Nations',
      'address':'1698 Summer Sty',
      'email':'brian.nations@gmail.com',
      'password':'pass4brian',
      'img':'../img/default-adult-img.png',
      'description': 'I love to teach css'
  },
  'barrineau':{
      'firstName':'Ryan',
      'lastName':'Barrineau',
      'address':'1251 Springhill Rd',
      'email':'ryan.barrineau@gmail.com',
      'password':'pass4ryan',
      'img':'../img/default-adult-img.png',
      'description': 'I try to tackle a home repair job every weekend'
  },
  'forest':{
      'firstName':'Forrest',
      'lastName':'Short',
      'address':'920 King Street',
      'email':'forrest.short@gmail.com',
      'password':'pass4forrest',
      'img':'../img/default-adult-img.png',
      'description': 'I find baking to be both therapeutic and stimulating'
  },
  'dexter':{
      'firstName':'Dexter',
      'lastName':'Something',
      'address':'920 King Street',
      'email':'dexter@gmail.com',
      'password':'pass4dex',
      'img':'../img/default-adult-img.png',
      'description': 'I find baking to be both therapeutic and stimulating'
  }
};
  var childData = {
'simon':{
  'firstName':'Simon',
  'lastName':'Barrineau',
  'address':'1251 Springhill Rd',
  'email': 'simon.barrineau@gmail.com',
  'password': 'pass4simon',
  'img': '../img/default-child-img.png',
  'description': 'I would love to help some w/ their programming side projects.',
  'balance' : 20.00
},
  'liam':{
      'firstName':'Liam',
      'lastName':'Battles',
      'address':'4967 Meadow Ave',
      'email': 'liam@gmail.com',
      'password': 'pass4liam',
      'img': '../img/default-child-img.png',
      'description': 'I am interested in helping with automotive projects',
      'balance' : 30.00
  },
  'erin':{
      'firstName':'Erin',
      'lastName':'Barrineau',
      'address':'1251 Springhill Rd',
      'email': 'erin@gmail.com',
      'password': 'pass4erin',
      'img': '../img/default-child-img.png',
      'description': 'I want to work to learn something and make money',
      'balance' : 15.00
  },
  'daniel':{
      'firstName':'Daniel',
      'lastName':'Tiger',
      'address':'1313 Trolley Rd',
      'email': 'daniel.tiger@gmail.com',
      'password': 'pass4dan',
      'img': '../img/default-child-img.png',
      'description': 'Please just Let me walk your dog',
      'balance' : 42.00
  },
  'sarah':{
      'firstName':'Sarah',
      'lastName':'Willson',
      'address':'3243 Redeemer Rd',
      'email': 'simon.wilson@gmail.com',
      'password': 'pass4sarah',
      'img': '../img/default-child-img.png',
      'description': 'I like to program',
      'balance' : 60.00
  }
};
  var commitments = {
        liam:{
          1:{
            'id'              : 2,
            'user'            : 'barrineau',
            'img'             :'../img/ionic.png',
            'jobname'         : 'Change burnt out car light bulbs',
            'pay'             : 10.00,
            'category'        : 'automotive',
            'address'         : '1251 Springhill Rd',
            'hours'           : 3,
            'extraInfo'      : 'My headlights are out',
            'ageRestriction' : 13,
            'startTime':'2:30pm',
            'startDate':'09/03'
          },
        2:{
            'id'              : 3,
            'user'            : 'nations',
            'img'             :'../img/ionic.png',
            'jobname'         : 'Change layout of webpage',
            'pay'             : 15.00,
            'category'        : 'web development',
            'address'         : '2233 Rutledge Ave',
            'hours'           : 5,
            'extraInfo'      : 'I will provide snacks',
            'ageRestriction' : '13',
            'startTime':'10:30am',
            'startDate':'09/13'
        },
          currentCount:2
        },
      simon: {
          1: {
              'id': 1,
              'user': 'forrest',
              'img': '../img/ionic.png',
              'jobname': 'Replace Shingle',
              'pay': 10.00,
              'category': 'rake leaves',
              'address': '1300 Atlantic Ave',
              'hours': 2.5,
              'extraInfo': 'My yard is full of leaves',
              'ageRestriction': 13,
              'startTime': '8:30am',
              'startDate': '10/01'
          },
          2: {
              'id': 4,
              'user': 'ratastkoskr',
              'img': '../img/ionic.png',
              'jobname': 'Build bookcases',
              'pay': 5.00,
              'category': 'home improvement',
              'address': '1300 Redeemer Rd',
              'hours': 1,
              'extraInfo': 'Ikea bookcases need putting together',
              'ageRestriction': '11',
              'startTime': '11:00am',
              'startDate': '09/09'
          },
          3: {
              'id': 5,
              'user': 'dexter',
              'img': '../img/ionic.png',
              'jobname': 'Write Magento code for me',
              'pay': 10.00,
              'category': 'web development',
              'address': '145 Williman St',
              'hours': 15,
              'extraInfo': 'I will provide snacks',
              'ageRestriction': 'none',
              'startTime': '7:00am',
              'startDate': '09/01'
          },
          currentCount: 3,
      },
      erin:{
          1:{
              'id'              : 6,
              'user'            : 'forrest',
              'img'             :'../img/ionic.png',
              'jobname'         : 'Nail together planting boxes',
              'pay'             : 5.00,
              'category'        : 'gardening',
              'address'         : '4807 Boulevard Lane',
              'hours'           : 1,
              'extraInfo'      : 'Have three planters that need planting',
              'ageRestriction' : 'none',
              'startTime':'11:00am',
              'startDate':'09/18'
          },
          2:{
              'id'              : 10,
              'user'            : 'nations',
              'img'             :'../img/ionic.png',
              'jobname'         : 'Set time on VCR',
              'pay'             : 2.50,
              'category'        : 'fix/repair',
              'address'         : '1254 Durant Cir',
              'hours'           :.25,
              'extraInfo'      : 'My VCR time will not stop blinking',
              'ageRestriction' : 'none',
              'startTime':'7:30am',
              'startDate':'09/07'
          },
          currentCount:2
      },
      dan:{
          1:{
              'id'              : 8,
              'user'            : 'dexter',
              'img'             :'../img/ionic.png',
              'jobname'         : 'Beat Super Mario Bros',
              'pay'             : 5.00,
              'category'        : 'gaming',
              'address'         : '920 King Street',
              'hours'           : 2,
              'extraInfo'      : 'I am looking for someone to show me how to be Super Mario Bros',
              'ageRestriction' : 'none',
              'startTime':'3:00pm',
              'startDate':'08/31'
          },
          2:{
              'id'              : 7,
              'user'            : 'rataskoskr',
              'img'             :'../img/ionic.png',
              'jobname'         : 'change sparkplugs',
              'pay'             : 8.75,
              'category'        : 'automotive',
              'address'         : '1248 Springhill Rd',
              'hours'           : 1,
              'extraInfo'      : 'I need help changing sparkplugs',
              'ageRestriction' : '12',
              'startTime':'10:00am',
              'startDate':'09/15'
          },
          currentCount:2
      },
      sarah:{
          1:{
              'id'              : 9,
              'user'            : 'barrineau',
              'img'             :'../img/ionic.png',
              'jobname'         : 'Paint fence',
              'pay'             : 35.00,
              'category'        : 'home repair',
              'address'         : '1457 Cherry St',
              'hours'           : 5,
              'extraInfo'      : 'Wear clothes that can get dirty',
              'ageRestriction' : 16,
              'startTime':'08:00am',
              'startDate':'09/17'
          },
          currentCount:1
      }
 };
  var jobs = {
      1 : {
          'id': 11,
          'user': 'dexter',
          'img':'../img/person_4.png',
          'jobname': 'Change oil in 1998 VW Golf',
          'pay': 10.00,
          'category': 'automotive',
          'address': '4807 Boulevard Lane',
          'hours': 2,
          'extraInfo': 'Wear clothes that can get dirty',
          'ageRestriction': 'none',
          'startTime':'2pm',
          'startDate':'08/30'
      },
      2:{
          'id'              : 12,
          'user'            : 'ratastkoskr',
          'img'             :'../img/person_2.png',
          'jobname'         : 'Replace Shingle',
          'pay'             : 15.00,
          'category'        : 'home repair',
          'address'         : '3922 Fort Drive',
          'hours'           : 3,
          'extraInfo'      : 'We will not be working high on a roof this.',
          'ageRestriction' : 16,
          'startTime':'2pm',
          'startDate':'09/30'
      },
      3:{
          'id'              : 13,
          'user'            : 'barrineau',
          'img'             :'../img/person_3.png',
          'jobname'         : 'Make webpage',
          'pay'             : 10.00,
          'category'        : 'computers',
          'address'         : '145 Williman St',
          'hours'           : 3,
          'extraInfo'      : 'I need a webpage to show off my cats',
          'ageRestriction' : 'none',
          'startTime':'4pm',
          'startDate':'09/30'
      },
      4: {
          'id'              : 14,
          'user'            : 'forrest',
          'img'             :'../img/person_4.png',
          'jobname': 'Mow lawn',
          'pay': 10.00,
          'category': 'yard work',
          'address': '145 Williman St',
          'hours': 1,
          'extraInfo': 'I need a webpage to show off my cats',
          'ageRestriction': 'none',
          'startTime':'10:00am',
          'startDate':'09/02'
      },
      5: {
          'id'              : 15,
          'user'            : 'ratastkoskr',
          'img'             :'../img/person_2.png',
          'jobname': 'Change Lightswitch',
          'pay': 8.00,
          'category': 'electrical',
          'address': '1251 Springhill rd',
          'hours':.5,
          'extraInfo': 'I will turn all power off and before we take the switch apart',
          'ageRestriction': '16',
          'startTime':'8am',
          'startDate':'09/30'
      },
      6: {
          'id'              : 16,
          'user'            : 'ratastkoskr',
          'img'             :'../img/person_2.png',
          'jobname': 'change lighbulb',
          'pay': 5.00,
          'category': 'electrical',
          'address': '1251 Springhill rd',
          'hours':.5,
          'extraInfo': 'I have a lightbulb that I cannot seam to reach',
          'ageRestriction': 'none',
          'startTime':'9am',
          'startDate':'09/30'
      },
      7: {
          'id'              : 17,
          'user'            : 'nations',
          'img'             :'../img/person_1.png',
          'jobname': 'clean kitchen',
          'pay': 10.00,
          'category': 'cleaning',
          'address': '4455 San Socci',
          'hours': 1,
          'extraInfo': 'I just need someone to mop my floor',
          'ageRestriction': 'none',
          'startTime':'9:30',
          'startDate':'11/22'
      },
      8: {
          'id'              : 18,
          'user'            : 'barrineau',
          'img'             :'../img/person_3.png',
          'jobname': 'clean kitchen',
          'pay': 10.00,
          'category': 'cleaning',
          'address': '4455 San Socci',
          'hours': 1,
          'extraInfo': 'I just need someone to mop my floor',
          'ageRestriction': 'none',
          'startTime':'9:30',
          'startDate':'11/22'
      },
      9: {
          'id'              : 19,
          'user'            : 'forrest',
          'img'             :'../img/person_4.png',
          'jobname': 'clean garage out',
          'pay': 35.00,
          'category': 'cleaning',
          'address': '2568 Saint street',
          'hours': 5,
          'extraInfo': 'My garage is full and needs to be cleaned out',
          'ageRestriction': 'none',
          'startTime':'10:00am',
          'startDate':'09/11'
      },
      10: {
          'id'              : 20,
          'user'            : 'dexter',
          'img'             :'../img/person_4.png',
          'jobname': 'wash boat',
          'pay': 10.00,
          'category': 'cleaning',
          'address': '2568 Huger st',
          'hours': 1,
          'extraInfo': 'I would like for someone to wash my boat',
          'ageRestriction': 'none',
          'startTime':'3:00pm',
          'startDate':'09/05'
      }
    };

    window.localStorage.commitments = JSON.stringify(commitments);
    window.localStorage.adultAccountInfo = JSON.stringify(adultData);
    window.localStorage.childAccountInfo = JSON.stringify(childData);
    window.localStorage.jobs = JSON.stringify(jobs);
    window.localStorage.jobsCount = 4;


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

})


.controller('JobDescriptionCtrl', function($scope, $stateParams) {
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

  };

})

.controller('SpecificCollabCtrl', function($scope, $stateParams) {
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
  };

});
