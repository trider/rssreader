app.controller("mainCtrl",
  function($scope, $rootScope, $state, $location, $listServices, $httpServices, $localStorage) {

    // function test(){
    //   return 10
    // }
    //
    //
    // $scope.test = test();
    // $scope.path = $rootScope.baseURL + 'http://www.feedforall.com/sample.xml'
    $scope.feedLst = [];
    $scope.url = 'http://www.feedforall.com/sample.xml';

    $scope.submit = function(request){
      $listServices.printLst(request)
      $httpServices.getHttpLst($rootScope.baseURL + request.path).then(function (data) {
        // $listServices.printLst(data)
        $scope.items = data.responseData.feed.entries;
        $scope.feedLst.push(request);
      });
    }




});
