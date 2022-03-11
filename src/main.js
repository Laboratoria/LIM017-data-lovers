/*import {dataMovies} from './data.js';*/
import data from './data/ghibli/ghibli.js';
console.log (data);

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

let myArray = data.films;
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index].title)
  }


  

//'<li>'+index.people+' '+index.people+'</li>'
/*console.log(data);
console.log(dataMovies)
*/

