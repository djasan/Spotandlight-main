



import { catalogue } from './module/catalogue.js';

const playList = () => {
    console.log("Affichage de la playlist");

    const playListHTML = document.querySelector("#playlist");
    playListHTML.innerHTML = "<ul>";

    // Parcourez le catalogue de musique et ajoutez chaque morceau à la liste de lecture
    catalogue.forEach((morceau, index) => {
        playListHTML.innerHTML += `
            <li>
                <p>Titre: ${morceau.titre}</p>
                <p>Artiste: ${morceau.artiste}</p>
                <p>Genre: ${morceau.genre.join(', ')}</p>
                <p>Année: ${morceau.année}</p>
                <img src="${morceau.cover}" alt="${morceau.titre} - ${morceau.artiste}">
                <audio controls>
                    <source src="${morceau.audio}" type="audio/mpeg">
                    Votre navigateur ne prend pas en charge l'audio HTML5.
                </audio>
            </li>
        `;
    });

    playListHTML.innerHTML += "</ul>";
};