/*
Created By: 

Skyler Hahn
Matthew Bruett
and Austin Kaiser
*/

function problem_5() {

var numbers = [0, 1, 2, 3, 4, 5];

//First Element
document.write("The first array element is: " + numbers[0]);
document.write("</br>");

//Last Element
document.write("The last array element is: " + numbers[numbers.length - 1]);
document.write("</br>");

//Third Array
document.write("The third array element is: " + numbers[2]);
document.write("</br>");

//Changed the 2nd element to 6
numbers[1] = 6;

//Outputs new value of the 2nd element.
document.write("The new value of the 2nd array element is: " + numbers[1]);
document.write("</br>");

//Inserts 100, 101, and 102 at the 4th array / 3rd index)
numbers.splice(3, 0, 100, 101, 102);

//Display first 5 values of the updated array.
document.write("The first 5 new elements are: " + numbers[0] + ", " + numbers[1] + ", " + numbers[2] + ", " + numbers[3] + ", " + numbers[4]);
}