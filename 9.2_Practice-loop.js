//This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package :
const prompt=require("prompt-sync")({sigint:true});

let a = prompt("Enter a number between 0 to 100 : ");
let b=99;
// let a=Number.parseInt(a);
while(a!=b){
    if(a>=10 & a<=19)
    {
        a = prompt("You guessed the wrong number please try to choose a higher number, Greater than 20  : ");
    }
    
    else if(a>=20 & a<=50)
{
    a = prompt("You guessed the wrong number please try to choose a higher number, such as 50  : ");
}
else if(a>=51 & a<=80)
{
a = prompt(" please try to choose a higher number, Greater than 80 , Enter number : ");
}
else if(a>=81 & a<=90)
{
a = prompt(" please try to choose a higher number, Greater than 90 , Enter number : ");
}
else if(a>=91 & a<=95)
{
    a = prompt(" please try to choose a higher number, Greater than 95 , Enter number : ");
}
else{
    a = prompt(" You are almost near the number try one more to choose the  number : ");
}
}
console.log("Congratulations !  Congratulations !  Congratulations ! Congratulations ! Congratulations !")
    console.log("Congratulations !!!!!!!!!!!!!!!!! You are win!");
