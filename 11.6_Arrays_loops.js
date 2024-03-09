let arr = [77,90,91,97]
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    
}

// forEach loop
//arr.forEach(callbackaction)
arr.forEach((element)=>{
    console.log(element * element);
});

// Array.form 
let name = "Abhi"
let arr1 = Array.from(name)
console.log(arr1);

// for ... of loop 
for(let i of arr){
    console.log(i);
}

/// for ... in loop 
for (let i in arr){
    console.log(i); // For in loop returns the index of the elements 
}