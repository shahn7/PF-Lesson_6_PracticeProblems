/*
Created By: 

Skyler Hahn
Matthew Bruett
and Austin Kaiser
*/

function problem_6() {
var emails = [];

//Prompt for array that asks what your email is
emails.push(prompt("What is the email?"));

//While loop to ask if there is another email to be entered; If not, loop ends and displays all emails
while (confirm("Do you have another email") === true) {
  emails.push(prompt("What is the email?"));
}

//Displays all emails entered
document.write("<b>The emails that you have entered are: </b>" + emails.join(", "));

}