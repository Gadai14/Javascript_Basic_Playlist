// Do while loop is a variant of While loop

const prompt=require("prompt-sync")({sigint:true});

let n=prompt("Enter the value of n :");
n=Number.parseInt(n);
let i=0;
// In Do-while loop first execute the do block then it checks the condition written in while loop
do{
    console.log(i);
    i++;
}while( i < n )