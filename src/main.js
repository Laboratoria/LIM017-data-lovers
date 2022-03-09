//import { todo lo que necesite } from './data.js';
import data from './data/ghibli/ghibli.js';

let bttnMoreInf = document.getElementById("bttnMoreInf");
bttnMoreInf.addEventListener("click", function() {
document.getElementById("tarjetInfo").className = "visible"; 
document.getElementById("inf").className = "invisible";
})

let backIntro = document.getElementById("backIntro");
backIntro.addEventListener("click", function() {
document.getElementById("inf").className = "visible"; 
document.getElementById("tarjetInfo").className = "invisible";
})
// import data from './data/rickandmorty/rickandmorty.js';

console.log(dataMovies, data);


