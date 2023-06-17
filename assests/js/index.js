let price = 5990000

let montos = document.querySelector("#monto");
let Coloruser = document.querySelector("#Coloruser");

let button = document.querySelector("#Total");

button.addEventListener("click", () => {
document.querySelector("#tot").innerHTML= montos.value * price;
document.querySelector("#montos").innerHTML= montos.value;
document.querySelector("#userColor").style.backgroundColor= Coloruser.value; 
})

let icon = document.querySelector("#icon")

icon.addEventListener("click", () => {
    document.querySelector("#tot").innerHTML = 0;
    document.querySelector("#montos").innerHTML = "";
    document.querySelector("#monto").value = "";
    document.querySelector("#Coloruser").value = "";
    document.querySelector("#userColor").style.backgroundColor = "#fff"
});
