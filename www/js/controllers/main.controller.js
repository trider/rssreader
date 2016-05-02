//todo: Remove feed functionality
//todo: Feed directive
//todo: Karma tests
//todo: Protractor tests

app.controller("mainCtrl",
  function($scope, $rootScope, $state, $location, $listServices, $httpServices, $localStorage) {

    $scope.init = function(){
      $scope.feedLst = [];
      $scope.url = 'http://www.feedforall.com/sample.xml';
      if($rootScope.feedLst !== null ){
        $scope.feedLst = $listServices.selectLstItms($rootScope.feedLst);
      }
      else{
        $localStorage.setObject('feedLst', $scope.feedLst);
      }
    }

    $scope.submit = function(request){
      var d = new Date();
      $scope.feedLst = $listServices.unselectLstItms($scope.feedLst);
      $httpServices.getHttpLst($rootScope.baseURL + request.path).then(function (data) {
        $scope.items = data.responseData.feed.entries;
        var feed = data.responseData.feed;
        delete feed.entries;
        feed.date = d.toJSON();
        feed.selected=true;
        $scope.feedLst.push(feed);
        $listServices.printLst(feed)
        $localStorage.setObject('feedLst', $scope.feedLst);
        request.path='';

      });
    }

    $scope.getFeed = function(feed, $index){
      $httpServices.getHttpLst($rootScope.baseURL + feed.feedUrl).then(function (data) {
        $scope.items = data.responseData.feed.entries;
        $scope.feedLst = $listServices.unselectLstItms($scope.feedLst)
        feed.selected=true;
        $localStorage.setObject('feedLst', $scope.feedLst);


      });
    }

    $scope.remove = function($index){
      $scope.feedLst.splice($index,1);
      $localStorage.setObject('feedLst', $scope.feedLst);
    }




});
