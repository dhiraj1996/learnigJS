
function getCheese() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const cheese = "🧀";
            resolve(cheese);
        },2000);
    });
}

const getDough= (cheese) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough = cheese + "🍩";
            resolve(dough);
            // reject("bad cheese")  //reject is used when something goes wrong and it will go to catch.
        },2000)
    })
}
function getPizza(dough) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza = dough + "🍕";
            resolve(pizza);
        }, 2000)
    });
}

////promise .then works//////

// getCheese()
//     .then((cheese)=>{
//         console.log("Here is the cheese " + cheese);
//         return getDough(cheese);
//     })
//     .then((dough)=>{
//         console.log("Here is the dough " + dough)
//         return getPizza(dough);
//     }).then((pizza) =>{
//         console.log("Here is the pizza" + pizza);
//     })
//     .catch((data) =>{
//         console.log("Not baked" + data);
//     })
//     .finally(()=>{
//         console.log("Process Ended");
//     });

//////Same thing with value name changed

// getCheese()
//     .then((c)=>{
//         console.log("Here is the cheese " + c);
//         return getDough(c);
//     })
//     .then((d)=>{
//         console.log("Here is the dough " + d)
//         return getPizza(d);
//     }).then((p) =>{
//         console.log("Here is the pizza" + p);
//     })
//     .catch((data) =>{
//         console.log("Not baked" + data);
//     })
//     .finally(()=>{
//         console.log("Process Ended");
//     });


//////aysnc - await ////////////////

// async function orderPizza() {
//     const c = await getCheese();
//     console.log("Here is the cheese " + c);

//     const d = await getDough(c); //Remember to pass c in the function which is cheese.
//     console.log("Here is the dough " + d);

//     const p = await getPizza(d);
//     console.log("Here is the pizza" + p);
    
//     console.log("Process Ended");
// }

// orderPizza();

///In async-await we .catch using try-catch

async function orderPizza() {
    try{
        const c = await getCheese();
        console.log("Here is the cheese " + c);
    
        const d = await getDough(c); //Remember to pass c in the function which is cheese.
        console.log("Here is the dough " + d);
    
        const p = await getPizza(d);
        console.log("Here is the pizza" + p);

        } catch(err) {
            console.log("Error" + err)
        }
    
    console.log("Process Ended");
}

orderPizza();