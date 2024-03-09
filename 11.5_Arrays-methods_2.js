let num = [1,2,4,11,90,22]
console.log(num);
delete num[0];
console.log(num.length);

/// concat() - used to join arrays to the given array 
let num2 = [ 11, 12, 34, 122, 90,99,100,110,288]
let num3 =[23,34,56,78,88,89,200,210,222]
let newarray = num.concat(num2 , num3)
console.log(newarray);
console.log(num,"\n",num2);

// sort() method is used to sort an array alphabetically , It modify the original array

let newarr = [990,110,11,22,56,9,78,7,99,118]
newarr.sort()
console.log(newarr);

// sort() takes an optional compare function .If this function is provided as the first argument, the sort() function will consider these values (the values returned from the compare function )as the basis of sorting

let compare = (a,b)=>{
    return a-b  // return values in Ascending order
}
newarr.sort(compare)
console.log(newarr);

// reverse() - returns the elements in the source array 

// splice() - it can be used to add new items to an array 
newarr.splice(2,3,1021,1022,1023)  // Here 2 is the starting value in the array and 3 is "how many elements are removed from the array "
console.log(newarr);

// splice returns the deleted items 

