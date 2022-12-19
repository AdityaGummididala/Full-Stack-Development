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
