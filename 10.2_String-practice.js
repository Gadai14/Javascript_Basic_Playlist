const prompt=require("prompt-sync")({sigint:true});
let fullname =prompt("Enter Your Full name Without spaces : ");
let username = "@" + fullname + fullname.length;
console.log(username);