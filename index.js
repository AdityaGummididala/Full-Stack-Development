//type conversion = it is the ability to change the datatype of a value to another 
//                  (strings,numbers,booleans)
let age = window.prompt("how old are you?"); 
//since this is a string we can't perform any sort of arithmetic operations in it 
//so let's convert it to a int first
console.log(typeof age)
age = Number(age);
age +=1;
console.log(typeof age)
console.log("happy birthday! You are", age ," years old");