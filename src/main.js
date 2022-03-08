import { showData } from './data.js';
import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

showData(data.data)


function seeChampions() {
    const html = document.getElementById("root");
    const champions = data.data;

    for (let champion in champions) {
        let data_champion = champions[champion];

    }
    return (
    html.innerHTML = 
    `<li class="name" id="name${id}">
<p class=name">${data.name}</p>          
<p>Key</p>
<p>Title</p>
<p>Blurb</p>
<p>Version</p>
<p>Imagen</p>
</li>`

)}