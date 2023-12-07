////Example 1 ///////////
function exampleOne(){

    //main code from here
    function getCheese(callback){
        setTimeout(() => {
            const cheese = "🧀";
            console.log("Here is the cheese" + cheese);
            callback(cheese);
        }, 2000);
    }

    getCheese((a)=> {    ///We can write any variable to fetch cheese value.
        console.log("Got the cheese" + a);
    })
    //End of code
}

exampleOne();

//////////////////////////



////Example 2 ///////
//And this is callbeck hell
//Nesting to much callback make code hard to read

function exampleTwo() {
    //code from here
    function getCheese(callback) {
    setTimeout(function() {
      const cheese = "🧀";
      console.log("Cheese is ready" + cheese);
      callback(cheese);
    }, 3000);
  }
  
  function getDough(cheese , callback){
    setTimeout(function(){
      const dough = cheese + "🍩";
      console.log("Here is the dough" + dough);
      callback(dough);
    },3000)
  }
  
  function getPizza(dough, callback){
    setTimeout(() =>{
      const pizza = dough + "🍕";
      console.log("Pizza is ready" + pizza);
      callback(pizza);
    }, 3000)
  }
  
  getCheese((cheese)=>{
    getDough(cheese, (dough) =>{
      getPizza(dough, (pizza)=> {
        console.log("Here is your pizza" + pizza);
      });
    });
  });
//end code
}

// exampleTwo();