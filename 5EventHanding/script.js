//Event Handler Functions

function hello() {
    console.log("I am clicked");
}

const jello = () =>{
    console.log("Hello im on mouse over");
}

//////Event Listener/////////

const box3 = document.getElementById("box-3");
box3.addEventListener("click", (e)=>{
    alert("Hello I am alert " + e.target.textContent);
});

document.getElementById("box-4").addEventListener("mouseover", ()=>{
    console.log("Mouse is over box 4");
})