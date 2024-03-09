let arr = ["Memari", "Debipur", "Pandua", "Magra", "Bandel","Liluah","Howrah"];
// value index and array itself (3 parameters)
arr.forEach((val,idx,arr) => {
    console.log(val.toUpperCase(),idx,arr);
});
// Higher order function : forEach ,functions that take one or more functions as arguments or return a function as their result 