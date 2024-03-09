/* Write a program to print the marks of a student in an object using for loop 
obj= { Abhi :99, Shree :99 , Sumanta :98}
*/

let marks ={
    Abhi : 99,
    Shree : 99,
    Sumanta : 98,
    Tufan : 97
}
// Using For Loop 

console.log("\nBy the help of For-in Loop");
console.log("-------------------------");
for (let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " is : " + marks[Object.keys(marks)[i]]);
}

// Same problem using for-in Loop 

console.log("\nBy the help of For-in Loop");
console.log("-------------------------");
for (let i in marks){
  
    console.log("The marks of : " +i + " is : " + marks[i]);
}