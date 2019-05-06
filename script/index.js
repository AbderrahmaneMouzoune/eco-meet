'use strict';

let avenir = document.getElementById('avenir');
let encours = document.getElementById('encours');
let event = document.getElementById('event');

avenir.onclick = function(){
    avenir.classList.add('current-Btn');
    encours.classList.remove('current-Btn');
    
    event.innerHTML = '<article class="card"><h1 class="card-title">Nanterre, Hauts-de-Seine</h1><h3 class="card-txt">Le 26 mai 2019</h3><h3 class="card-txt">À partir de 15h</h3><h3 class="card-txt">38 avenue geroges clemenceau</h3><button class="card-btn">En savoir plus !</button></article><article class="card"><h1 class="card-title">2 ème arrondissement, Paris</h1><h3 class="card-txt">Le 28 juin 2019</h3><h3 class="card-txt">À partir de 11h</h3><h3 class="card-txt">38 avenue geroges clemenceau</h3><button class="card-btn">En savoir plus !</button></article><article class="card"><h1 class="card-title">Gennevilliers, Hauts de Seine</h1><h3 class="card-txt">Le 21 juillet 2019</h3><h3 class="card-txt">À partir de 10h</h3><h3 class="card-txt">13 bis quai alfred sisley</h3><button class="card-btn">En savoir plus !</button></article>';

}

encours.onclick = function(){
    avenir.classList.remove('current-Btn');
    encours.classList.add('current-Btn');

    event.innerHTML = '<article class="card"><h1 class="card-title">2 ème arrondissement, Paris</h1><h3 class="card-txt current-card">Maintenant ! </h3><h3 class="card-txt">18 places de la bourse</h3><button class="card-btn">En savoir plus !</button></article><article class="card"><h1 class="card-title">Nanterre, Hauts-de-Seine</h1><h3 class="card-txt current-card">Maintenant ! </h3><h3 class="card-txt">38 avenue geroges clemenceau</h3><button class="card-btn">En savoir plus !</button></article><article class="card"><h1 class="card-title">Gennevilliers, Hauts-de-Seine</h1><h3 class="card-txt current-card">Maintenant ! </h3><h3 class="card-txt">13 bis quai alfred sisley</h3><button class="card-btn">En savoir plus !</button></article>';
}
