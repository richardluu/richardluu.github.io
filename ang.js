var myApp = angular.module('myApp',[]);

myApp.controller('mainController',function() {



});


var Person = function(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;

}


function logPerson()
{
  var john = new Person('John', 'Doe');
  console.log(john);

}

logPerson();