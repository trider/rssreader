describe('Controllers', function(){


  var scope, rootScope, location, state, stateParams, listServices, localStorage, val, httpServices;

  beforeEach(function() {
    module('app.controllers');
    //Mocks
    stateParams = jasmine.createSpyObj('$stateParams', ['stateParams']);
    location = jasmine.createSpyObj('$location', ['location']);
    state = jasmine.createSpyObj('$state', ['state']);
    listServices = jasmine.createSpyObj('$listServices', ['listServices']);
    httpServices = jasmine.createSpyObj('$httpServices', ['httpServices']);
    localStorage = jasmine.createSpyObj('$localStorage', ['localStorage']);

  });

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    rootScope = $rootScope;
    // $controller('mainCtrl', {
    //   $scope: scope,
    //   $rootScope:rootScope,
    //   $location:location,
    //   $state:state,
    //   $stateParams:stateParams,
    //   $listServices:listServices,
    //   $httpServices:httpServices,
    //   $localStorage:localStorage
    // });


  }));

  it('should have test equal to test', function(){
    expect(scope.test).toEqual('test');
  });





});



