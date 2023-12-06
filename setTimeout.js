// Example 1 //////////////
console.log("Hello");
setTimeout(()=>{
    console.log("World2")
}, 2000);

console.log("Dhiraj");


// Example 2 ///////////

console.log("Hello");
setTimeout(()=>{
    console.log("Timeout Hello 2sec")
}, 2000);

console.log("World");

setTimeout(()=>{
    console.log("Timeout Hello 1 sec")
}, 1000);

setTimeout(()=>{
    console.log("Timeout Hello 1.5 sec")
}, 1500);

console.log("last World");

//If we write wrong code inside setTimeout it will show error for that specific line and move to next function
//And execute it.