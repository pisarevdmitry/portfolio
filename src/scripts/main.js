import auth from './flip';
import  parallax from './parallax';
import  fixedMenu from './menu'
let flip =document.querySelector('#flip-container');
let autorization = document.querySelector("#btn_autorization");
let button =document.getElementById("hamburger-menu");
let nav =document.getElementById("navigation");
let slash = location.href.lastIndexOf("/");
let container = document.getElementById("parallax");
let hero =document.getElementById("hero");



//////
if(location.href.substr(slash) ==="/index.html"||location.href.substr(slash) ==="/") {
        auth(autorization,flip)
}
else {

    fixedMenu(button,nav)

}
parallax(hero,container);
