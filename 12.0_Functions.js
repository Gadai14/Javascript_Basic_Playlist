// Function is a block of code that performs a specific task , can be invoked whenever needed
function oneplusaverage(x,y){
    
    return 1+(x+y)/2;
    
}
let a=1;
let b=2;
let c=3;


console.log("one plus Average of a and b : " ,oneplusaverage(a,b));
console.log("one plus Average of b and c : " ,oneplusaverage(b,c));
console.log("one plus Average of c and a : " ,oneplusaverage(c,a));

// Another type of Writting Function
const sum = (p,q)=>{
    return p+q;
}
console.log(sum(9,1));

// Function without Argument 
const hello = ()=>{
    console.log("Hey ! What's Up ....");;
}
hello();