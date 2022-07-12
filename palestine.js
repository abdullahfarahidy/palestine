//container
let body= document.querySelector("body");
body.style.margin="0";
let container = document.createElement("div");
container.style.width="100%";
container.style.height="100vh";
container.style.position="relative";
body.appendChild(container);
//black
let black = document.createElement("div");
black.style.top = "0";
black.style.position="absolute";
black.style.width = "100%";
black.style.height = "33.333333333333333333333333%";
black.style.backgroundColor ="black";
container.appendChild(black);
//green
let green = document.createElement("div");
green.style.position="absolute";
green.style.width = "100%";
green.style.height = "33.333333333333333333333333%";
green.style.backgroundColor ="green";
green.style.bottom = "0";
container.appendChild(green);
 //red
let red=document.createElement("div")
red.style.position="absolute";
red.style.borderStyle= "solid"
red.style.borderColor="transparent transparent transparent red"
red.style.borderWidth="50vh"

container.appendChild(red)  