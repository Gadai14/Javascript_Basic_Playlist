//  Conditional Statements 
// This will demonstrate the use of prompt on the server side by using the “prompt-sync” package 
const prompt=require("prompt-sync")({sigint:true});

// The below code are properly worked in the site's console (Chrome Browser Console )

let a = prompt("Hey whats your age :  ");
a=Number.parseInt(a);
if(a>18)
{
    // alert function is worked on console .
    alert("This is valid age for Vote");
}