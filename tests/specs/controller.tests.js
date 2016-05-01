describe('Controllers', function(){
  var scope, rootScope;

  // load the controller's module
  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    rootScope = $rootScope;
    $controller('mainCtrl', {$scope: scope,
      $rootScope:rootScope});
  }));

  // tests start here
  it('should have items > 0', function(){
    expect(scope.test).toBeGreaterThan(0);
  });
});
