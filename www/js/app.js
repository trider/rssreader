var app = angular.module('app', ['ionic'])

app.run(
  function ($rootScope, $localStorage, $location, $state ) {

    //Attempt to find a solution for detecteing back button
    // $rootScope.$on('stateChangeSuccess', function() {
    //   // if($rootScope.previousLocation == $location.path()) {
    //     console.log("Back Button Pressed");
    //     console.log($location.path())
    //   // }
    //   // $rootScope.previousLocation = $rootScope.actualLocation;
    //   // $rootScope.actualLocation = $location.path();
    // });

    //Base url for Google JSON API
    $rootScope.baseURL = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q=';

    //Retrieves URLs from local storage
    var feedLst = $localStorage.getObject('feedLst');
    $rootScope.feedLst = [];
    if (feedLst.length > 0) {
      $rootScope.feedLst = feedLst;
    }


  });
