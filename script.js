$(document).ready(function() {
var koreanCities = ["Busan", "Seoul", "Masan", "Daegu", "Gimhae", "Ulsan", "Jejudo"];

/*
In order to calculate the Korean age with the JavaScript 'this' keyword
we have to create a method (i.e. a function inside an object). When 'this' is
used inside of an object, it refers to the GLOBAL OBJECT, which would be the
browser window. There is no .age property of the global object, so my old code
always returned undefined. Now if we use 'this' inside of a method, then it will
refer to the intended object, in this case myLoveProfile.
*/

var myLoveProfile = {
	name: "Stephen",
	single: false,
	age: 29,
	koreanAge: function() {
		return this.age + 1;
	},
	currentCity: koreanCities[0]
};
console.log(myLoveProfile.koreanAge());

var possibleMatch= {
	name: "Ji-yeon",
	single: true,
	age: 23,
	currentCity: koreanCities[0]
};

$('#loveButton').on('click', function() {
  if (myLoveProfile.currentCity === possibleMatch.currentCity && myLoveProfile.single && possibleMatch.single) {
  	$('h1').text('You are a match!');
  } else if (myLoveProfile.currentCity !== possibleMatch.currentCity && myLoveProfile.single && possibleMatch.single) {
  	$('h1').text('Do you like long distance?');
  } else if (!myLoveProfile.single && myLoveProfile.currentCity !== possibleMatch.currentCity) {
  	$('h1').text('You are a cheater!!');
  } else {
  	$('.message').append("<h2 style='color: red;'>No match!</h2");
  }
});






});
