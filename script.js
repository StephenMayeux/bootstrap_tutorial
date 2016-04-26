$(document).ready(function() {
var koreanCities = ["Busan", "Seoul", "Masan", "Daegu", "Gimhae", "Ulsan", "Jejudo"];

var myLoveProfile = {
	name: "Stephen",
	single: false,
	age: 29,
	currentCity: koreanCities[0]
};

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
