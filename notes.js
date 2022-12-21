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
//hypotenuse calc program
/*
let a;
let b;
let c;

a= window.prompt("enter side A")
a=Number(a)

b=window.prompt("enter the side B")
b=Number(b)

c = Math.pow(a,2)+ (Math.pow(b,2));
c=Math.sqrt(c);
console.log(c)
*/
//or
/*
->in html
<label id="alabel">Side A:</label> <br>
 <input type="text" id="atext"> <br>
 <label id="blabel">Side B:</label> <br>
 <input type="text" id="btext"> <br>
 <button type="button" id="mybutton"> Submit </button> <br>
 <label id="Clabel"></label> <br>
 ->in js
let a;
let b;
let c;
document.getElementById("mybutton").onclick = function()
{ 
    a=document.getElementById("atext").value;
    a=Number(a);
    b=document.getElementById("btext").value;
    b=Number(b);
    c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
    document.getElementById("Clabel").innerHTML="Side C :" + c ;
}
*/
//counter prob
/*
->in html
 <label id="countlabel">0</label>
 <button type="button" id="decrease">decrease</button>
 <button type="button" id="reset">reset</button>
 <button type="button" id="increase">increase </button>
    <script src="index.js"> </script 
    ->in js
    let count = 0;
document.getElementById("decrease").onclick=function()
{
    count -=1;
    document.getElementById("countlabel").innerHTML=count;
}
document.getElementById("increase").onclick=function()
{
count +=1;
document.getElementById("countlabel").innerHTML=count;
}
document.getElementById("reset").onclick=function() {
    count = 0
    document.getElementById("countlabel").innerHTML=count;
}
->css
#countlabel{
    display: block;
    text-align: center;
    font-size: 50px;
}

#decrease{
    
    text-align: left;
    font-size: small;
}
#increase{
    text-align: right;
    font-size: small;
}
#reset{
    text-align: center;
    font-size: small;
}
*/
//random number generator
/*
let x = Math.floor(((Math.random() *6)+1))
console.log(x)
*/
//useful string properties and methods
/*
let username="    adityaaaaaaaaaaaaaaaaaaaaaaaaaa   "
//console.log(username.length)
//let x = username.charAt(2)
////console.log("the char at 2nd index is ",x)
//console.log(username.indexOf("y"))
//console.log(username.lastIndexOf("a"))
username = username.trim()
console.log(username)
username=username.toUpperCase();
y=username.toLowerCase();
console.log(username)
console.log(y)
let phone;
phone="12-34-56-79-0"
phone=phone.replaceAll("-" , "")
console.log(phone)
*/