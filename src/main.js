import data from './data/ghibli/ghibli.js';
import { filterData, sortData, computeStats } from './data.js';
import { ORDER_ASCENDENTE, ORDER_DESCENDENTE } from './data.js';

const arrayFilms = data.films;
/*flecha para volver a historia 2*/
const arrowBack = document.getElementById("arrowBack");

//PRIMERA HISTORIA
const buttonAccess = document.getElementById("buttonAccess");
buttonAccess.addEventListener("click", showPage);

function showPage() {
  document.getElementById("contentPageOne").style.display = "none";
  document.getElementById("greetingPageOne").style.display = "block";
  let inputName = document.getElementById("userInput").value;
  document.getElementById("userName").innerText = inputName;
  setTimeout(showPage2, 1000);
}
function showPage2() {
  document.getElementById("pageOne").style.display = "none";
  document.getElementById("pageTwo").style.display = "block";
  showFilms(arrayFilms);

  /*mostrar historia 3*/
  const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
  showPage3(filmsDisplay, arrayFilms);

  /*volver a historia 2*/
  arrowBack.addEventListener("click", () => {
    const filmsDiv = document.getElementById("contentPageTwo");
    filmsDiv.innerHTML = "";
    arrowBack.style.display = "none";
    /*historia 2*/
    showFilms(arrayFilms);
    /*mostrar historia 3*/
    const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
    showPage3(filmsDisplay, arrayFilms);
  });
}

function showFilms(dataToPrint) {
  const filmsDiv = document.getElementById("contentPageTwo");
  let filmDiv = '';
  dataToPrint.forEach(e => {
    filmDiv += `<div id="film${[e.id]}">
                   <img src="${e.poster}">
                   <h2> ${e.title}</h2>
                   <h4>
                   <p>Director: ${e.director}</p>
                   <p>Productor: ${e.producer}</p>
                   <p>${e.release_date}<p>
                   </h4>
                   </div>`;
  });
  filmsDiv.innerHTML = filmDiv;
  return filmsDiv;
}

//manejo del DOM
function readPropertyFromFilm(data, property) {
  return data[property]
}

//Peliculas por TITULO
function filterDataByMovieTitleAsc() {
  let orderData = sortData(data.films, "title", ORDER_ASCENDENTE);

  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  hideMenuNav();
  //pintar los objetos ya ordenados
  showFilms(orderData);
  /*mostrar historia 3*/
  const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
  showPage3(filmsDisplay, orderData)
  //flecha para peliculas ascendente
  arrowBack.addEventListener("click", () => {
    const filmsDiv = document.getElementById("contentPageTwo");
    filmsDiv.innerHTML = "";
    arrowBack.style.display = "none";
    filterDataByMovieTitleAsc()
  });
}

let buttonFilterByMovieTitleAsc = document.getElementById("filterDataByMovieTitleAsc");
buttonFilterByMovieTitleAsc.addEventListener("click", filterDataByMovieTitleAsc);

function filterDataByMovieTitleDesc() {
  let orderData = sortData(data.films, "title", ORDER_DESCENDENTE);
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  hideMenuNav();
  showFilms(orderData);
  /*mostrar historia 3*/
  const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
  showPage3(filmsDisplay, orderData)
  //flecha para peliculas descendente
  arrowBack.addEventListener("click", () => {
    const filmsDiv = document.getElementById("contentPageTwo");
    filmsDiv.innerHTML = "";
    arrowBack.style.display = "none";
    filterDataByMovieTitleDesc()
  });
}
let buttonFilterByMovieTitleDesc = document.getElementById("filterDataByMovieTitleDesc");
buttonFilterByMovieTitleDesc.addEventListener("click", filterDataByMovieTitleDesc);


//EVENTOS PARA DIRECTORES
//----------evento ascendente-----------
let buttonFilterByMovieDirectorAsc = document.getElementById("filterDataByMovieDirectorAsc");
buttonFilterByMovieDirectorAsc.addEventListener("click", filterDataByMovieDirectorAsc);

function filterDataByMovieDirectorAsc() {
  let orderData = sortData(data.films, "director", ORDER_ASCENDENTE);
  const onlyDirectors = [];
  orderData.forEach(p => {
    if (onlyDirectors.findIndex(pd => pd.director === p.director) === -1) {
      // No existe; al detectar que no existe el mismo nombre, "la copiamos"
      onlyDirectors.push(p);
    }
  });
  //limpiar
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //mostrar directores
  hideMenuNav();
  showFilmsDirector(onlyDirectors);
}
//----------evento descendente-----------
let buttonFilterByMovieDirectorDesc = document.getElementById("filterDataByMovieDirectorDesc");
buttonFilterByMovieDirectorDesc.addEventListener("click", filterDataByMovieDirectorDesc);

function filterDataByMovieDirectorDesc() {
  let orderData = sortData(data.films, "director", ORDER_DESCENDENTE);
  const onlyDirectors = [];
  orderData.forEach(p => {
    if (onlyDirectors.findIndex(pd => pd.director === p.director) === -1) {
      // No existe; al detectar que no existe el mismo nombre, "la copiamos"
      onlyDirectors.push(p);
    }
  });
  //limpiar
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //mostrar directores
  hideMenuNav();
  showFilmsDirector(onlyDirectors);
}

//MOSTRAR DIRECTORES
function showFilmsDirector(dataToPrint) {
  const filmsDiv = document.getElementById("contentPageTwo");
  let allFilms = '';

  for (let i = 0; i < dataToPrint.length; i++) {
    let filmDiv = `<article id="director${[i]}">`
    filmDiv = filmDiv + '<img src="' + readPropertyFromFilm(dataToPrint[i], "posterDirector") + '">';
    filmDiv = filmDiv + '<h2>'
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "director") + '<br>';
    filmDiv = filmDiv + '</h2>'
    filmDiv = filmDiv + '</article>'
    allFilms += filmDiv
  }
  filmsDiv.innerHTML = allFilms;
}


//Ordenar las peliculas por PRODUCTORES
function sortDataByMovieProducerAsc() {
  let orderData = sortData(data.films, "producer", ORDER_ASCENDENTE);
  const onlyProducers = [];
  orderData.forEach(p => {
    if (onlyProducers.findIndex(pd => pd.producer === p.producer) === -1) {
      // No existe; al detectar que no existe el mismo nombre, "la copiamos"
      onlyProducers.push(p);
    }
  });

  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";

  //pintar los objetos ya ordenados
  hideMenuNav();
  showFilmsByProducer(onlyProducers);
}
function sortDataByMovieProducerDes() {
  let orderData = sortData(data.films, "producer", ORDER_DESCENDENTE);
  const onlyProducersDesc = [];
  orderData.forEach(p => {
    if (onlyProducersDesc.findIndex(pd => pd.producer === p.producer) === -1) {
      // No existe; al detectar que no existe el mismo nombre, "la copiamos"
      onlyProducersDesc.push(p);
    }
  });
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";

  //pintar los objetos ya ordenados
  hideMenuNav();
  showFilmsByProducer(onlyProducersDesc);
}

let buttonSorByMovieProducerAsc = document.getElementById("sortDataByMovieProducerAsc");
buttonSorByMovieProducerAsc.addEventListener("click", sortDataByMovieProducerAsc)

let buttonSorByMovieProducerDes = document.getElementById("sortDataByMovieProducerDes");
buttonSorByMovieProducerDes.addEventListener("click", sortDataByMovieProducerDes)
//
function showFilmsByProducer(dataToPrint) {
  const producersDiv = document.getElementById("contentPageTwo");
  let producerDiv = "";
  dataToPrint.forEach(e => {
    producerDiv += `<article id="producer${[e.id]}">
                     <img src="${e.posterProducer}">
                     <h2> ${e.producer}</h2>
                     </article>`;
  });
  producersDiv.innerHTML = producerDiv;
  return producersDiv;
}


//para ordenar las peliculas por año
function filterDataByYearAsc() {
  const orderData = sortData(data.films, "release_date", ORDER_ASCENDENTE);
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //pintar los objetos ya ordenados
  hideMenuNav();
  showFilmsByYear(orderData);
  /*Historia 3*/
  const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
  showPage3(filmsDisplay, orderData)
  //flecha para peliculas ascendente
  arrowBack.addEventListener("click", () => {
    const filmsDiv = document.getElementById("contentPageTwo");
    filmsDiv.innerHTML = "";
    arrowBack.style.display = "none";
    filterDataByYearAsc()
  });
}

function filterDataByYearDes() {
  const orderData = sortData(data.films, "release_date", ORDER_DESCENDENTE);
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //pintar los objetos ya ordenados
  hideMenuNav();
  showFilmsByYear(orderData);
  /*Historia 3*/
  const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
  showPage3(filmsDisplay, orderData)
  //flecha para peliculas ascendente
  arrowBack.addEventListener("click", () => {
    const filmsDiv = document.getElementById("contentPageTwo");
    filmsDiv.innerHTML = "";
    arrowBack.style.display = "none";
    filterDataByYearDes()
  });
}
const buttonFilterByYearAsc = document.getElementById("filterDataByYearAsc");
buttonFilterByYearAsc.addEventListener("click", filterDataByYearAsc)

const buttonFilterByYearDes = document.getElementById("filterDataByYearDes");
buttonFilterByYearDes.addEventListener("click", filterDataByYearDes)


function showFilmsByYear(dataToPrint) {
  const filmsDiv = document.getElementById("contentPageTwo");
  let filmDiv = '';
  dataToPrint.forEach(e => {
    filmDiv += `<div id="film${[e.id]}">
                     <img src="${e.poster}">
                     <h2> ${e.title}</h2>
                     <h1>
                     <p>${e.release_date}<p>
                     </h1>
                     </div>`;
  });
  filmsDiv.innerHTML = filmDiv;
  return filmsDiv;
}


//BUSCADOR
/*que busque al dar enter*/
const elem = document.getElementById('seekerInput');
elem.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const textFilter = document.getElementById("seekerInput").value;
    const filmsFiltered = filterData(arrayFilms, textFilter);
    showFilms(filmsFiltered);
    /*mostrar historia 3*/
    const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
    showPage3(filmsDisplay, filmsFiltered);

    /*volver a historia 2*/
    arrowBack.addEventListener("click", () => {
      const filmsDiv = document.getElementById("contentPageTwo");
      filmsDiv.innerHTML = "";
      arrowBack.style.display = "none";
      showFilms(filmsFiltered);
      const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
      showPage3(filmsDisplay, filmsFiltered);
    });
  }
});
/*para que la busqueda se de mientras se escribe*/
elem.addEventListener("keyup", function () {
  const textFilter = document.getElementById("seekerInput").value;
  const filmsFiltered = filterData(arrayFilms, textFilter);
  showFilms(filmsFiltered);
  /*mostrar historia 3*/
  const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
  showPage3(filmsDisplay, filmsFiltered);

  /*volver a historia 2*/
  arrowBack.addEventListener("click", () => {
    const filmsDiv = document.getElementById("contentPageTwo");
    filmsDiv.innerHTML = "";
    arrowBack.style.display = "none";
    showFilms(filmsFiltered);
    const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
    showPage3(filmsDisplay, filmsFiltered);
  });
});
/*datos en minuscula
1ra letra a lower y 2da+ upper*/


//ocultar menu de navegador
let clickLabelCheck = document.getElementById("labelCheck");
clickLabelCheck.addEventListener("click", hideMenuNav);

function hideMenuNav() {
  let navegadorMenu = document.getElementById("navMenu")
  navegadorMenu.classList.add('hideMenu')

}
// mostrar menu de navegador
let clickLabelShow = document.getElementById("checkLabelShow");
clickLabelShow.addEventListener("click", showMenuNav);

function showMenuNav() {
  let navegadorMenu = document.getElementById("navMenu")
  navegadorMenu.classList.remove('hideMenu')

}

/*mostrar historia 3*/
function showPage3(filmsDisplay, array) {
  const filmsDiv = document.getElementById("contentPageTwo");
  let filmInfo = '';

  for (let i = 0; i < filmsDisplay.length; i++) {
    filmsDisplay[i].addEventListener('click', function filmInformation() {

      for (let j = 0; j < array.length; j++) {
        if (i == j) {
          let filmDiv = `<div style="display:block;text-align:justify;width:70%;">
                         <img src="${array[j].poster}"><br><br>
                         <h2> ${array[j].title}</h2> <br> <br>
                         <h4>
                         <p>Director: ${array[j].director}</p><br>
                         <p>Productor: ${array[j].producer}</p><br>
                         <p>Release date: ${array[j].release_date}<p><br>
                         <p>Description:${array[j].description}<p>
                         </h4>
                         </div>`;
          filmInfo = filmDiv
        }
        filmsDiv.innerHTML = filmInfo
        arrowBack.style.display = "";
      }
    });
  }
}


function computeTotalNumberOfSpecie(specie) {
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //contador
  let numberOfSpecie = computeStats(arrayFilms, specie);
  hideMenuNav();
  showFilmsDataPeople(numberOfSpecie);
}

function computeTotalNumberOfHuman() {
  computeTotalNumberOfSpecie("Human");
}
function computeTotalNumberOfCats() {
  computeTotalNumberOfSpecie("Cat");
  document.getElementById("imageCats");
}
function computeTotalNumberOfTotoro() {
  computeTotalNumberOfSpecie("Totoro");
}
function computeTotalNumberOfWitch() {
  computeTotalNumberOfSpecie("Witch");
}

function computeTotalNumberOfRaccon() {
  computeTotalNumberOfSpecie("Raccoon Dog");
}
 function computeTotalNumberOfRedelk() {
  computeTotalNumberOfSpecie("Red elk");
} 
function computeTotalNumberOfSpirit() {
  computeTotalNumberOfSpecie("Spirit"); 
}
function computeTotalNumberOfWolf() {
  computeTotalNumberOfSpecie("Wolf");
 
}

//mostrando conteo-------
function showFilmsDataPeople(dataToPrint) {
  let allFilms="";
  const filmsDiv = document.getElementById("contentPageTwo");
  let filmDiv = `<article style="font-size:xx-larger; width:90% ">`
  filmDiv = filmDiv + '<img src="img/people.jpg">'
  filmDiv = filmDiv + '<img src="img/3people.jpg">'
  filmDiv = filmDiv + '<img src="img/Studio-Ghibli.jpg">'
  filmDiv = filmDiv + '<br><br><br><h1><strong>En esta web del Studio Ghibli, la cantidad de este personaje es : '+dataToPrint+ '</strong></h1>'
  filmDiv = filmDiv + '</article>'
  allFilms = filmDiv + allFilms
  filmsDiv.innerHTML = allFilms; 
}
// evento de compute stats

const buttonFilterDataByHuman = document.getElementById("filterDataByHuman");
buttonFilterDataByHuman.addEventListener("click", computeTotalNumberOfHuman);

const buttonFilterDataByCats = document.getElementById("filterDataByCats");
buttonFilterDataByCats.addEventListener("click", computeTotalNumberOfCats);

const buttonFilterDataByTotoro = document.getElementById("filterDataByTotoros");
buttonFilterDataByTotoro.addEventListener("click", computeTotalNumberOfTotoro);

const buttonFilterDataByWitch = document.getElementById("filterDataByWitch");
buttonFilterDataByWitch.addEventListener("click", computeTotalNumberOfWitch);

const buttonFilterDataByRaccon = document.getElementById("filterDataByRaccon");
buttonFilterDataByRaccon.addEventListener("click", computeTotalNumberOfRaccon);

const buttonFilterDataByRedelk = document.getElementById("filterDataByRedelk");
buttonFilterDataByRedelk.addEventListener("click", computeTotalNumberOfRedelk);

const buttonFilterDataBySpirit = document.getElementById("filterDataBySpirit");
buttonFilterDataBySpirit.addEventListener("click", computeTotalNumberOfSpirit);

const buttonFilterDataByWolf = document.getElementById("filterDataByWolf");
buttonFilterDataByWolf.addEventListener("click", computeTotalNumberOfWolf);

