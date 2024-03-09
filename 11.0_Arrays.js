let marks_class_9 =[91,90,76,89, false, "Not present"]
console.log(marks_class_9);
console.log("The length of marks_class_9 is : " , marks_class_9.length);

marks_class_9[0] = 97 // Changing the value of an array 
marks_class_9[6] = true;
console.log(marks_class_9);


// In javascript arrays are objects . The typeof operator on arrays returns object 
console.log(typeof(marks_class_9));