// 1. Create an array of numbers and take input from the used to add numbers to this array
let arr= [1,5,6,20,45]
const prompt=require("prompt-sync")({sigint:true});
let a = prompt("Enter a Number : ");
a=Number.parseInt(a);
arr.push(a);
console.log(arr);

// 2. keep adding numbers to the array in (1) until 0 is added to the array

do {
    a= prompt("Enter a number : ");
    a= Number.parseInt(a);
    arr.push(a);
    
}while(a!=0)
console.log(arr);

// 3. filter for numbers divisible by 10 from a given array

let arr2= [ 10,23,45,40,60,99]
let n= arr2.filter((x)=>{
    return x%10 ==0
});
console.log(n);