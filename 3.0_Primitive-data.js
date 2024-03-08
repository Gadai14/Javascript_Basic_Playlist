// There are 7 Primitive Data types in Javascript
/*  null
    Number
    String
    Symbol
    Boolean
    BigInt
    Undefined    */
// nn ss bb u

let a = null; // null means absence of an object
let b = 456;
let c = false;
let d = BigInt("9870");
let e = "Abhi";
let f = undefined;
let h // This indicates that 'h' will be undefined 
let g = Symbol("Nice symbol");
console.log(a,"\n",b, c, d, e, f, g);

console.log(typeof d);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);


// Objects In Javascript (Non-primitive)
const student={
    Name : "Abhijit Pal",
    Age : 21, 
     // Key : Value  - 1) obj.key   2) obj["key"]
    CGPA : 8.9,
    isPass :true
};
// Value change in an Object
student["CGPA"] = 9.0;

console.log(typeof(student));
console.log(student["Name"]);
console.log(student.Age);
console.log(student.CGPA);
