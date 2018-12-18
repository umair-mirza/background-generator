const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const background = document.getElementById("gradient");
const h1 = document.getElementById("heading");

function backgrounder() {
	background.style.background = "linear-gradient(to right, green, yellow)";
}

function gradientor() {
	background.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

window.addEventListener("load", backgrounder);

color1.addEventListener("input", gradientor);

color2.addEventListener("input", gradientor);




