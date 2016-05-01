app.controller("mainCtrl",
  function($scope,$rootScope, $location, $listServices, $httpServices, $localStorage) {

    var path='http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q=http://www.engadget.com/rss.xml';
    // var path='http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q=http://blog.ionic.io/feed/';
    $httpServices.getHttpLst(path).then(function (data) {
      $listServices.printLst(data)
      $scope.items = data.responseData.feed.entries;
      // $scope.data;
    });


});
