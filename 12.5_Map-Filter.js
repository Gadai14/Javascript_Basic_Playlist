//map() - Creates a new array by performing some operation on each array element

let arr = [12,23,43]
let a=arr.map((value,index,array)=>{
console.log(value,index,array)
return value+1;
})
console.log(a);

// filter - Creates a new array of elements that give true for a condition/filter 

let arr2 = [23,54,11,13,18]
let a2= arr2.filter((a)=>{
    return a<20
})
console.log(a2)

// Array reduce() method - Reduces an array to a single value . Reduces te array into a single value 
 let arr3=[12,45,1,2,9,10,2]
 let a3 =arr3.reduce((abhi1,abhi2)=>{
    return abhi1+abhi2;
 });
 console.log(a3);

 const output =arr3.reduce((a1,a2)=>{
    return a1>a2 ?a1:a2;
 });
 console.log(output);