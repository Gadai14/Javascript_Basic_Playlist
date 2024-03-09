// Create an array to store companies and 1. Remove the first company from the company   2. Remover Uber & Add Ola inits place     3. Add Amazon at the end 

let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

 companies.splice(2,1,"Ola");
 companies.push("Amazon");
 console.log(companies);

 