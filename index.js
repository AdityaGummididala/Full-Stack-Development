//console.log("Not again");
//console.log('Hello World')    //we can print a statement either using "" or '' (double quotes or single quotes)
//window.alert("bruh hello world again?") //this pops an alert message in the website
/*
this 
is 
a multiline comment
*/
//variables
/*
->A variable is a container for storing data
->A variable behaves as if it was the value that it contains
->There are two steps:-
1.Declaration(var,let,const)
2.Assignment(= assignment operator)
*/
let age;
age=18;
age= age+1;
console.log(age);
let firstname = "Aditya Gummididala"; //string
console.log(firstname);
let student = true //boolean it is one of two values true of false
console.log(student);
console.log("hello",firstname);
console.log("you are ",age,"years old");
console.log(student,"you are enrolled");
document.getElementById("p1").innerHTML = "Hello "+firstname;
document.getElementById("p2").innerHTML = "you are "+age+" years old";
document.getElementById("p3").innerHTML = "Enrolled: "+student;