//useful string properties and methods
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