// To activate strict mode very first line of your code should be "use strict"
"use strict"
//Although we can use comments before the "use strict" line because comments are ignored by JavaScript

const student = "John Mayor";
let isCourseAccess = false;
let isEnrolled = true;

if(isEnrolled){
    isCourseAcess = true; // This will give error if strict mode is active else considered that new variable is declared 
    console.log(`Now ${student} has access to the course`)
}

//Strict mode also prevents us by using some specific reserve words that are save for future releases

const interface = "new UI";
const private = "456";