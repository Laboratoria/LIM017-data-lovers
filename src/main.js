import {dataMovies} from './data.js';
import data from './data/ghibli/ghibli.js';
console.log (data);
console.log(dataMovies);

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
/* let datitos = myArray.map(function callback(bar,){
    return '<li>'+bar.films+' '+bar.films+'</li>'
  }) */
/* for (let index=0; index<myArray.length; index++){
document.getElementById("datitos").innerHTML = myArray[index].title}
if(index=[0]) */

myArray.forEach((myArray) => {
    document.getElementById("datitos").innerHTML += '<li>'+ ("titulo" +' '+ myArray.title)+' '+ myArray.description +'</li>';

  })
  console.log(myArray);






  

//'<li>'+index.people+' '+index.people+'</li>'
/*console.log(data);
console.log(dataMovies)
*/

