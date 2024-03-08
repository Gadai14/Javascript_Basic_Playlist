// 3) Write a Javascript Program to find whether a number is Divisible by 2 and 3 :

const prompt = require("prompt-sync")({sigint:true});

let num = prompt("Enter a Number : ");
num = Number.parseInt(num);

if(num%2==0 && num%3==0)
{
    console.log("The number is divisible by 2 and 3");
}
else
{
console.log("The number is not divisible by 2 and 3");
}