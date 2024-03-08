// var is Globally scoped but let and const is block scoped .

let a = 45
let b = "Abhi"
// let a = "Gadai"    let can not be re-declared but can updated
// var can be re-declared and updated (var b=90 )
// Const cannot be redeclared and updated
// const declaration must be Initialized ( const a =90 )
var c = null
var d = undefined



const author = "ABHIJIT"
console.log("The Author is : " , author);

{
    // let is always used let for better experience
    let b='Gadai'
    console.log(b)
}
console.log(b)


/* Variable Rules :
only letters ,digits , underscore(_)and $ is allowed .(not even space)
only a letter , underscore(_) or $ should be 1st character 
Reserved words cannot be variable names .
*/