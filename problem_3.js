/*
Created By: 

Skyler Hahn
Matthew Bruett
and Austin Kaiser
*/

function problem_3() {
	var i = 0;
	
  for (i=0; i<=255; i++) {

    document.write(i);
    document.write(" ");
      
    document.write(String.fromCharCode(i));
    document.write(" ");
    
    document.write((i).toString(16));
    document.write("<br>");
    
  }
}