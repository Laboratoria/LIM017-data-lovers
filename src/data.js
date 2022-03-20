export const sortMovies = (filmsData) => {
  
  sortMovies.sort(function (a,b) {
    if (a.title.toLowerCase()<b.title.toLowerCase ())
    return -1;
    if (a.title.toLowerCase()>b.title.toLowerCase ())
    return 1;
    return 0;
    });
  console.log(sortMovies);


// estas funciones son de ejemplo
//let import data from './data/ghibli/ghibli.js';

/* export const sortMovies = (filmsData) => {
  
return filmsData.sort();
  //informacion de data
let films_main =data.films;
let films_year= films_main.year;
console.log(films_year);


function getData() {
  films_year.sort()

};
*/

export const anotherExample = () => {
  return 'OMG';
};
