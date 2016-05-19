var app = angular.module('app', ['ionic', 'ui.router', 'app.controllers','app.services']);
app.controllers = angular.module('app.controllers', []);
app.services = angular.module('app.services', []);


app.run(
  function ($rootScope, $localStorage, $location, $state ) {

    //Detects back button
    $rootScope.$on('stateChangeSuccess',
      function (event, toState, toParams){
          console.log(JSON.stringify(toState))
      });

    //Base url for Google JSON API
    $rootScope.baseURL = 'https://crossorigin.me/http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q=';

    //Retrieves URLs from local storage
    var feedLst = $localStorage.getObject('feedLst');
    $rootScope.feedLst = [];
    if (feedLst.length > 0) {
      $rootScope.feedLst = feedLst;
    }


  });
