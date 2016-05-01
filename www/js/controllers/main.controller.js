app.controller("mainCtrl",
  function($scope, $rootScope, $state, $location, $listServices, $httpServices, $localStorage) {

    function test(){
      return 10
    }


    $scope.test = test();
    $scope.path = $rootScope.baseURL + 'http://www.feedforall.com/sample.xml'
    $scope.feedLst = [];
    if($rootScope.feedLst != null ){
      $scope.feedLst =  $rootScope.feedLst;
    }
    else{
      $localStorage.setObject('feedLst', $scope.feedLst);
    }

    $scope.url = 'http://www.feedforall.com/sample.xml';

    $scope.submit = function(request, isNewURL){
      var d = new Date();
      $listServices.printLst(request)
      $httpServices.getHttpLst($rootScope.baseURL + request.path).then(function (data) {
        $scope.items = data.responseData.feed.entries;
        console.log(isNewURL)
        if(isNewURL){
          var feed = data.responseData.feed;
          delete feed.entries;
          feed.date = d.toJSON();
          $scope.feedLst.push(feed);
          $listServices.printLst(feed)
          $localStorage.setObject('feedLst', $scope.feedLst);
        }
      });
    }
    $scope.remove = function(){
      alert()
    }




});
