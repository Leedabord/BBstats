var ionApp = angular.module('BBstatsH', ['ionic', 'ngResource']);

ionApp.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider
  .state('app.main', {
    url: "/main",
    views: {
      'menuContent': {
        templateUrl: "main.html",
        controller: 'AppCtrl'
      }
    }
  })
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "menu.html"
  });
/*  
  })
  .state('app.roster', {
    url: "/roster",
    views: {
      'menuContent': {
        templateUrl: "roster.html",
        controller: 'AppCtrl'
      }
    }
*/    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});

ionApp.run( function ($rootScope, $http) {

  $rootScope.accGroup = [];  // grp00={ name: "__", isShown: false };
//  for (hh = 0; hh < 20; hh++) {        
//    $rootScope.accGroup.push(JSON.parse(JSON.stringify(tS00)));
//  };

  $http.get('https://api.airtable.com/v0/app0hohtq4b1nM0Kb/LookItUp?api_key=key66fQg5IghIIQmb')
    .success(function (jData) {
  $rootScope.rawS = jData.records;
//      $rootScope.rawS = JSON.parse(JSON.stringify(jData.records));
    });

});

ionApp.controller('AppCtrl', function($rootScope, $scope, $http) {

  //
 
/*  AES-256 encrypt / decrypt 
$(document).ready(function () {
    // encrypt listener
    $('#encryptBtn').click(function () {
        var t = new Date();
        var ciphertext = Aes.Ctr.encrypt($('#plaintext').val(), $('#password').val(), 256);
        $('#encrypt-time').html(((new Date() - t)) + 'ms');
        $('#cipher').val(ciphertext);
    });

    // decrypt listener
    $('#decryptBtn').click(function () {
        var t = new Date();
        var plain = Aes.Ctr.decrypt($('#cipher').val(), $('#password').val(), 256);
        $('#decrypt-time').html(((new Date() - t)) + 'ms');
        $('#plaintext').val(plain);
    });


    $('#plaintextDiv .clear').click(function () {
        $('#plaintext').val("");
    });
    $('#cipherDiv .clear').click(function () {
        $('#cipher').val("");
    });


});
*/  //   end AES-256 e/d

});
