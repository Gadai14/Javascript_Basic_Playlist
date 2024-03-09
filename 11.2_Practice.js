// For a given array with prices of 5 items . All items an offer 10% off on them . Calculate this
let items =[250,645,300,900,50];
let i=0;
for(let val of items)
{
    console.log(`value at index ${i} = ${val}`);
    let offer = val /10;
    items[i]-=offer;
    console.log(`The value after discount ${items[i]}`);
i++;

}
