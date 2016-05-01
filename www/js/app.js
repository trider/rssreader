
var app = angular.module('app', ['ionic'])

app.run(
  function($ionicPlatform, $rootScope, $localStorage ) {
  $rootScope.baseURL='http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q=';
    var feedLst = $localStorage.getObject('feedLst');
    $rootScope.feedLst =  [];
    if(feedLst.length > 0){
      $rootScope.feedLst =  feedLst;
    }


});
