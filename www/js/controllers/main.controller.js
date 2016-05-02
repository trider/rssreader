
app.controller("mainCtrl",
  function ($scope, $rootScope, $state, $location, $listServices, $httpServices, $localStorage) {

    $scope.url = 'RSS Reader';
    
    //Init functionality isolated in function
    $scope.init = function () {
      $scope.feedLst = [];
      if ($rootScope.feedLst !== null) {
        $scope.feedLst = $listServices.selectLstItms($rootScope.feedLst);
      }
      else {
        $localStorage.setObject('feedLst', $scope.feedLst);
      }
    }
    
    //Function for adding feed to list
    $scope.submit = function (request) {
      var d = new Date();
      $scope.feedLst = $listServices.unselectLstItms($scope.feedLst);
      $httpServices.getHttpLst($rootScope.baseURL + request.path).then(function (data) {
        $scope.items = data.responseData.feed.entries;
        var feed = data.responseData.feed;
        delete feed.entries;
        feed.date = d.toJSON();
        feed.selected = true;
        $scope.url = feed.feedUrl;
        $scope.feedLst.push(feed);
        $listServices.printLst(feed)
        $localStorage.setObject('feedLst', $scope.feedLst);
        request.path = '';

      });
    }
    
    //Function for selecting feed from displayed feed list
    $scope.getFeed = function (feed, $index) {
      $httpServices.getHttpLst($rootScope.baseURL + feed.feedUrl).then(function (data) {
        $scope.items = data.responseData.feed.entries;
        $scope.feedLst = $listServices.unselectLstItms($scope.feedLst)
        feed.selected = true;
        $scope.url = feed.feedUrl;
        $localStorage.setObject('feedLst', $scope.feedLst);
      });
    }
    
    //Removes feed from list using JS splice function
    $scope.remove = function ($index) {
      $scope.feedLst.splice($index, 1);
      $localStorage.setObject('feedLst', $scope.feedLst);
    }


  });
