/*
Created By: 

Skyler Hahn
Matthew Bruett
and Austin Kaiser
*/

function bubbleSort() {
	var numbers = [];
	var i;
	
	for (i=1; i<=3; i++) {
		numbers.push(Number(prompt("What is the number")));
	}
	document.write(numbers.sort().join(", "));
}
