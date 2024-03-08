/*  
3) Create a const object in javascript , can you change it to hold a number letter
=> Ans : No , I cannot change .

4)Try to add a new key to the const object in problem '3' , were you able to do it 
*/

const a = {
    name : "Abhi" ,
    section : 1 ,
    isvicechairman : true
          }

// It's throw an error because we could not change it to hold number or letter
// a = 54

// We can add this value into 'a' object 

a['friend'] = "Shree"
console.log(a);