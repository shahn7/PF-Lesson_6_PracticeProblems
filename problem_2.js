/*
Created By: 

Skyler Hahn
Matthew Bruett
and Austin Kaiser
*/

function problem_2() {
var i = 0;
var output;

for (i=0; i<=100; i++) {
	if (i%2 === 0) {
		//If the number is even, it will be displayed as "Fizz"
		document.write(i + " = Fizz")
		document.write("</br>");
	} else if (i%2 === 1) { 
		//If the number is odd, it will be displayed as "Buzz"
		document.write(i + " = Buzz")
		document.write("</br>");
	}
	}
}