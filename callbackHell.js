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