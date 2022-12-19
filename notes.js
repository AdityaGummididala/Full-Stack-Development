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
/*
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
*/
/*-----------------------------------------------------------------------*/
/* arthimetic expression is a combination of..
operands(values,variables,etc.)
operators(+ - * / %)
that can be evaluated to a value
ex:- y=x+5;
*/
//let students = 20;
//nostudents = students-1;
//students = students + 1;
//console.log(students);
//console.log(nostudents);
//extra = students % 3;
//console.log(extra);
//students += 1; //(this is called augumented assignment operator i.e shortcut for students = students +1;)
//students -= 2;
//students *= 3;
//students /=2;
//console.log(students);
/*
operator precedence
1.parenthesis()
2.exponents
3.multiplication&division
4.addition & subtraction
*/
//let result = 2+2*(3+4);
//console.log(result)
//how to take user input
/*
the easy way
let username = window.prompt("what's your name?");
console.log(username);
*/

// the more practical way
/*
document.getElementById("mybutton").onclick=function()
{
    username=document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML="Hello "+username;
}
*/
/* in html
<label id="mylabel">enter your name</label><br>
 <input type="text" id="mytext"> <br>
 <button type="button" id="mybutton">submit</button>
*/
//
//type conversion = it is the ability to change the datatype of a value to another 
//                  (strings,numbers,booleans)
/*
let age = window.prompt("how old are you?"); 
//since this is a string we can't perform any sort of arithmetic operations in it 
so let's convert it to a int first
console.log(typeof age)
age = Number(age);
age +=1;
console.log(typeof age)
console.log("happy birthday! You are", age ," years old");
--
let x;
let y;
let z;
x= Number("3.14");
y= String(3.14);
z= Boolean("");
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/
//--
// const = a variable that can't be changed
 /*
const PI =3.14159;
let radius;
let circumference;
radius = window.prompt("enter the radius of a circle")
radius = Number(radius);
circumference = 2*PI*radius;
console.log("the circumference is ", circumference)
*/
/*
let x = 3.89
let y = 5;
let z = 9;
x = Math.round(x);
b = Math.floor(x);
c= Math.ceil(x);
d=Math.pow(x,2);
e=Math.sqrt(x);
f=Math.abs(x);
maximum = Math.max(x,y,z);
minimum = Math.min(x,y,z);
a=Math.PI;
console.log(x);
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(maximum)
console.log(minimum)
console.log(a)
*/