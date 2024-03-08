// Loops are used to execute a piece of code again and again
for(let i=0 ; i<=20 ; i++){
    console.log(i+1);
}

// For in loop (Objects , arrays)
let student = {
    name: "Shyamashree Das",
    age: "21",
    cgpa:9.1,
    ispass:true
};
for (let key in student)
{
    // console.log(a);

    // This is used for return the values of the keys 
    console.log("Keys are :",key);
    console.log("Values are :", student[key]);
}


// For of loop (Strings & Arrays)
let size=0;
for (let b of "Abhijit")
{
console.log(b);
size++;
}
console.log("The size of the string is : ",size);