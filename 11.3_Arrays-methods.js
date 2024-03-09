let n = [1,2,4,5,89,90];
// push() : add to end
n.push(34);
console.log(n);

// Convert the array into string 
let b=n.toString()
 console.log(b);


let c = n.join(" and ")
console.log(c);

let deleted= n.pop();
// pop returns the popped element 
console.log(`deleted number is : ${deleted}`);


// concat joins multiple arrays & returns result

let marvel_heros =["Iron man", "Thor","Hulk","Spiderman"];
let dc_heros =["Superman","Batman"];
let heros=marvel_heros.concat(dc_heros);
console.log(heros);

// Shift() removes first element and returns it
let v = n.shift()
console.log(v,n);

// unshift() - adds element to the beginning and returns new array length

let s= n.unshift(10)
console.log(s,n);


