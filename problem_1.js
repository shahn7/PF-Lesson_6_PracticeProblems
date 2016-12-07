/*
Created By: 

Skyler Hahn
Matthew Bruett
and Austin Kaiser
*/

function problem_1() {

//While Loop  
function numberSumWhile() {
  var total = 0;
  var counter = 1;
		while (counter <= 100) {   
			total += counter;
			counter++;
		}
  return total;
}
//Outputs sum for the While Loop
document.write("This is the sum for the \"While Loop\" : " + numberSumWhile());
document.write("<br>");
//END of While Loop

//Do-While Loop
function numberSumDoWhile() {
  var total = 0;
  var counter = 1;
		do {
			total += counter;
			counter++;
		}
		while (counter <= 100);
		return total;
}  
//Outputs sum for the Do-While Loop
document.write("This is the sum for the \"Do-While Loop\" : " + numberSumDoWhile());
document.write("<br>");
//END of Do-While Loop

//For Loop
	function numberSumFor() {
		var total = 0;
		for (var counter = 1; counter <= 100; counter++) {
			total += counter;
		}
		return total;
	}
	//Output sum for the For Loop
	document.write("This is the sum for the \"For Loop\" : " + numberSumFor());
	document.write("<br>");
//END of For Loop
}
 
