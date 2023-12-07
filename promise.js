//This is how to write promise code
//Example 1
const isBoarded = true;

const ticket = new Promise(function (resolve, reject){   ///I found out we can give any name to resolve and reject
    if(isBoarded){
        resolve("I am in the flight");
    }else{
        reject("Flight is cancelled");
    }
});

ticket.then((data) =>{
    console.log("Wohoo " + data);  //.then takes data of resolve.
}).catch((data)=>{
    console.log("Ohno " + data);  //.catch takes data of reject.
}).finally(()=>{
    console.log("This will always print"); //finally always get printed whether it is resolved or rejected
});