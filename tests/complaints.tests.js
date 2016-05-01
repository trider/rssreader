/**
 * Created by jonnygold on 15-22-07.
 */

describe('Complaints', function(){

 var scope, location, state, stateParams, listService, localstorage, ionicLoading, cordovaFile, timeout,
   ionicPopover, mapService, cordovaGeolocation, cordovaCamera, ionicPopup;

 beforeEach(function() {
  module('mcApp.controllers');
  //Mocks
   location = jasmine.createSpyObj('$location', ['location']);
  location = jasmine.createSpyObj('$location', ['location']);
  state = jasmine.createSpyObj('$state', ['state']);
  listService = jasmine.createSpyObj('$listService', ['listService']);
  ionicLoading = jasmine.createSpyObj('$ionicLoading', ['ionicLoading']);
  localstorage = jasmine.createSpyObj('$localstorage', ['localstorage']);
  cordovaFile = jasmine.createSpyObj('$cordovaFile', ['cordovaFile']);
  timeout = jasmine.createSpyObj('$timeout', ['timeout']);
  ionicPopup = jasmine.createSpyObj('$ionicPopup', ['ionicPopup']);
  mapService = jasmine.createSpyObj('$mapService', ['mapService']);
  ionicPopover = jasmine.createSpyObj('$ionicPopover', ['ionicPopover']);
  cordovaGeolocation = jasmine.createSpyObj('$cordovaGeolocation', ['cordovaGeolocation']);
  cordovaCamera = jasmine.createSpyObj('$cordovaCamera', ['cordovaCamera']);
 });

 beforeEach(inject(function(_$httpBackend_, $q, $rootScope, $controller) {
  scope = $rootScope.$new();
  rootScope = $rootScope;
  $httpBackend = _$httpBackend_;

  localstorage = {
   getObject:function(val){
    return usr;
   }};

  ionicPopover = {
   fromTemplateUrl:function(mappopover, scope){

   }};

  listService = {
   getHttpSecureLst:function(path, token){
    return complaints;
   },
   getHttpLst:function(path){
    return complaints;
   }
  };

  spyOn(listService, "getHttpSecureLst").and.callFake(function() {
   var deferred = $q.defer();
   deferred.resolve(complaints);
   return deferred.promise;
  });

  spyOn(listService, "getHttpLst").and.callFake(function() {
   var deferred = $q.defer();
   deferred.resolve(complaints);
   return deferred.promise;
  });


  spyOn(ionicPopover, "fromTemplateUrl").and.callFake(function() {
   var deferred = $q.defer();
   deferred.resolve();
   return deferred.promise;
  });

  $controller('complaintsCtrl', {
   $scope: scope,
   $location:location,
   $state:state,
   $stateParams:stateParams,
   $listService:listService,
   $localstorage:localstorage,
   $ionicLoading:ionicLoading,
   $rootScope:rootScope,
   $cordovaFile:cordovaFile,
   $timeout:timeout,
   $ionicPopover:ionicPopover,
   $mapService:mapService,
   $cordovaGeolocation:cordovaGeolocation,
   $cordovaCamera:cordovaCamera,
   $ionicPopup:ionicPopup
  });

 }));








});
