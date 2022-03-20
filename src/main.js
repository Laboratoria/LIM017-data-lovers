import {sortMovies} from './data.js';
import data from './data/ghibli/ghibli.js';
console.log (data);
// console.log(dataMovies);


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
// let yearOrden = document.getElementById("yearOrden");
// yearOrden.addEventListener("click",()=>{
// const moviesOrden= sortMovies(data.films);
// console.log(moviesOrden);
// })

myArray.forEach((displayAllData) => {
  document.getElementById("filmsInfo").innerHTML += `
  <div class="cardContainer">
  <div class="cardInner">
  <div class="cardFront">
  <img class="poster" src="${displayAllData.poster}">
   <div class="filmsTitle"> ${displayAllData.title}</div>
   <div class="filmsYear"> Year: ${displayAllData.release_date} <span>  ⭐ ${displayAllData.rt_score}</span> 
   </div>
  </div>
  <div class="cardBack">
  <div class="cardTextBack">
  Director:  ${displayAllData.director}
  <br>
  Description: ${displayAllData.description}
  </div>
   </div>
   </div>
   </div> 
  `
    })

    
// let sortedInfo= document.getElementById("selectSortAZ");
// sortedInfo.addEventListener("change",)

