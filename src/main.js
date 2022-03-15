import {dataMovies} from './data.js';
import data from './data/ghibli/ghibli.js';
console.log (data);
console.log(dataMovies);


let bttnMoreInf = document.getElementById("bttnMoreInf");
bttnMoreInf.addEventListener("click",()=>{
  const pageOne=document.getElementById("pageOne");
  pageOne.style.display="none";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="";
})


let backIntro = document.getElementById("backIntro");
backIntro.addEventListener("click",()=>{
  const pageOne=document.getElementById("pageOne");
  pageOne.style.display="";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
})

// import data from './data/rickandmorty/rickandmorty.js';

let myArray = data.films;
//let myList = "";

myArray.forEach((displayAllData) => {
  document.getElementById("filmsInfo").innerHTML += `
  <div class="cards">
  <div class="filmsTitle"> Title: ${displayAllData.title}</div>
  <br>
  <div class="filmsDescription"> Description: ${displayAllData.description}</div>
  <img class="poster" src="${displayAllData.poster}">
   <br>
  </div>
  `
    })








  

//'<li>'+index.people+' '+index.people+'</li>'
/*console.log(data);
console.log(dataMovies)
*/

