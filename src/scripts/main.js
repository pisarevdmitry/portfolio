import auth from './flip';
import  parallax from './parallax';
import  fixedMenu from './menu'
import initMap from "./map"
import preloader from "./preloader"
import slider from "./slider"
import sidebar from './sidebar'
import  scroll from "./scroll"
scroll= scroll();
let flip =document.querySelector('#flip-container');
let autorization = document.querySelector("#btn_autorization");
let button =document.getElementById("hamburger-menu");
let nav =document.getElementById("navigation");
let slash = location.href.lastIndexOf("/");
let container = document.getElementById("parallax");
let hero =document.getElementById("hero");
let blogNav = document.getElementById("blogNav");
let url =location.href.substr(slash);

//////
if(url.indexOf("/index.html") > -1||url ==="/") {
        parallax(hero,container,"mouse");
        auth(autorization,flip);
        preloader();
}
else if(url.indexOf("/about.html") > -1) {
    parallax(hero, container);
    fixedMenu(button, nav);
    initMap();
    scroll.top()

}
else if(url.indexOf("/blog.html") > -1){
    sidebar(blogNav);
    fixedMenu(button,nav);
    parallax(hero, container);
    scroll.top()

}
else {
    fixedMenu(button, nav);
    parallax(hero,container);
    slider(1.3);
    scroll.top();
    scroll.bottom()



}

