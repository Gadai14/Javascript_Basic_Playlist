// Strings are used to store and manupilate text 
let name="Abhi"
console.log("Name : " , name);
console.log("Lengt is : ",name.length);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);

// let name = "Gadai'    // Don't do this 

// single code also worked 
let friend = 'Shree'
console.log("Friend : " ,friend);

// Template litarals

console.log("\nTemplate literals");
console.log("---------------------------");

let girl1= "Shyama"
let boy1= "Abhi"
let sentence = `${girl1} is a friend of ${boy1}`
console.log(sentence);


let obj={
    item: "pen",
    price:10
};
console.log(`The cost of ${obj.item} is ${obj.price} Rupees`);

// We can insert variable directly in Template literal , This is called String Interpolation 

// Escape sequence Characters
console.log("\nEscape Sequence Characters ");
console.log("---------------------------");
let fruit = 'Man\'go'
console.log(fruit);