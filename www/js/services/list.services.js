app.service('$listServices', function ($http, $q) {

 this.printLst = function(lst){
  console.log(JSON.stringify(lst));
 };

 this.printLstItms = function(lst){
   angular.forEach(lst, function (item, key) {
    console.log(JSON.stringify(item));
   });

 }

});
