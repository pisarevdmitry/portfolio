'use strict';

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 0);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__flip__ = __webpack_require__(1);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__parallax__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__map__ = __webpack_require__(4);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__preloader__ = __webpack_require__(5);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__sidebar__ = __webpack_require__(6);

    var flip = document.querySelector('#flip-container');
    var autorization = document.querySelector("#btn_autorization");
    var button = document.getElementById("hamburger-menu");
    var nav = document.getElementById("navigation");
    var slash = location.href.lastIndexOf("/");
    var container = document.getElementById("parallax");
    var hero = document.getElementById("hero");
    var blogNav = document.getElementById("blogNav");
    var url = location.href.substr(slash);

    //////
    if (url.indexOf("/index.html") > -1 || url === "/") {
        Object(__WEBPACK_IMPORTED_MODULE_1__parallax__["a" /* default */])(hero, container, "mouse");
        Object(__WEBPACK_IMPORTED_MODULE_0__flip__["a" /* default */])(autorization, flip);
        Object(__WEBPACK_IMPORTED_MODULE_4__preloader__["a" /* default */])();
    } else if (url.indexOf("/about.html") > -1) {
        Object(__WEBPACK_IMPORTED_MODULE_1__parallax__["a" /* default */])(hero, container);
        Object(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* default */])(button, nav);
        Object(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])();
    } else if (url.indexOf("/blog.html") > -1) {
        Object(__WEBPACK_IMPORTED_MODULE_5__sidebar__["a" /* default */])(blogNav);
        Object(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* default */])(button, nav);
        Object(__WEBPACK_IMPORTED_MODULE_1__parallax__["a" /* default */])(hero, container);
    } else {
        Object(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* default */])(button, nav);
        Object(__WEBPACK_IMPORTED_MODULE_1__parallax__["a" /* default */])(hero, container);
    }

    /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = function (button, block) {

        button.addEventListener("click", function (e) {
            e.preventDefault();
            button.style.cssText = "opacity:0;cursor:default";
            block.classList.add("reverse");
        });
    };

    /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = function (section, container, triger) {
        var sectionHeight = section.offsetHeight;
        var layer = container.firstElementChild;

        var scrollParallax = function scrollParallax(e) {
            var marginTop = window.pageYOffset;
            if (marginTop <= sectionHeight) {
                layer.style.transform = 'translate3d(0,-' + marginTop * 0.11 + 'px , 0)';
            }
        };
        var moveParallax = function moveParallax(e) {
            var initialX = window.innerWidth / 2 - e.pageX;
            var initialY = window.innerHeight / 2 - e.pageY;
            layer.style.transform = 'translate3d(' + initialX * 0.03 + 'px, ' + initialY * 0.03 + 'px, 0)';
        };
        if (triger === "mouse") {
            section.addEventListener("mousemove", moveParallax);
        } else {
            document.addEventListener("scroll", scrollParallax);
            document.addEventListener("resize", function () {
                sectionHeight = section.offsetHeight;
            });
        }
    };

    /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    /* harmony default export */
    __webpack_exports__["a"] = function (button, menu) {
        var flag = true;
        var menuList = menu.getElementsByTagName("li");
        var current = menu.getElementsByClassName("navigation__link_current");
        var open = function open() {
            new Promise(function (resolve) {
                button.firstElementChild.classList.add("hamburger-menu-bars_closed");
                menu.classList.add("navigation_fixed");
                menu.style.opacity = 1;
                document.body.classList.add("fixed");
                resolve();
            }).then(setTimeout(function () {
                var _loop = function _loop(i) {
                    setTimeout(function () {
                        menuList[i].style.left = 0;
                    }, i * 140);
                };

                for (var i = 0; i < menuList.length; i++) {
                    _loop(i);
                }
            }, 900));
        };

        var close = function close() {
            new Promise(function (resolve) {
                document.body.classList.remove("fixed");

                var _loop2 = function _loop2(i) {
                    setTimeout(function () {
                        menuList[i].style.left = "-100%";
                    }, i * 110);
                };

                for (var i = 0; i < menuList.length; i++) {
                    _loop2(i);
                }
                resolve();
            }).then(function () {
                menu.style.opacity = 0;
                button.firstElementChild.classList.remove("hamburger-menu-bars_closed");
                setTimeout(function () {
                    menu.classList.remove("navigation_fixed");
                    menu.style = "";
                }, 900);
            });
        };
        button.addEventListener("click", function () {
            if (flag) {
                open();
            } else {
                close();
            }
            flag = flag ? false : true;
        });
        current[0].addEventListener("click", function (e) {
            e.preventDefault();
            close();
            flag = flag ? false : true;
        });
    };

    /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = function () {
        var map = void 0;
        var screenWidth = screen.width;
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 55.64566662,
                lng: 37.7236551
            },
            zoom: 15,
            styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#f2f2f2"
                }, {
                    "lightness": 5
                }]
            }, {
                "featureType": "landscape.natural.landcover",
                "elementType": "geometry.fill",
                "stylers": [{
                    "saturation": -25
                }, {
                    "lightness": -65
                }]
            }, {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry.fill",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 25
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#e8e8e8"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            }, {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#4369aa"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }]
        });
        var marker = new google.maps.Marker({
            position: {
                lat: 55.64610556,
                lng: 37.73828655
            },
            map: map,
            icon: {
                url: "assets/images/svg/map_marker.svg",
                size: new google.maps.Size(50, 30),
                origin: new google.maps.Point(0, 0)
            }

        });
        var setMap = function setMap() {
            if (screenWidth > 780) {
                map.setCenter({ lat: 55.64566662, lng: 37.7236551 });
            } else if (screenWidth <= 780 && screenWidth > 560) {
                map.setCenter({ lat: 55.64611464, lng: 37.72957742 });
            } else if (screenWidth <= 560) {
                map.setCenter({ lat: 55.64612675, lng: 37.73675501 });
            }
        };
        setMap();
        window.addEventListener("scroll", function () {
            screenWidth = screen.width;
            setMap();
        });
    };

    /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = function () {
        var container = document.getElementById("preloader");
        var text = document.getElementById("text");
        var inner = document.getElementById("inner");
        var dash = 0;
        var persent = 0;
        text.innerHTML = 1;
        inner.style.strokeDasharray = "1.57 282.6";
        if (sessionStorage.getItem("my-preloader")) {
            container.style.display = "none";
        } else {
            sessionStorage.setItem("my-preloader", true);
            var timer = setInterval(function () {
                text.innerHTML = ++persent;
                inner.style.strokeDasharray = (dash += 1.57) + ' 282.6';
                if (persent === 100) clearInterval(timer);
            }, 70);

            setTimeout(function () {
                container.style.display = "none";
            }, 7700);
        }
    };

    /***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = function (container) {
        var blog = document.getElementById("blog");
        var articleNavList = container.firstElementChild;
        var articlesNav = Array.prototype.slice.apply(articleNavList.children);
        var article = document.getElementById("articles");
        var articlesList = article.children;
        for (var i = 0; i < articlesNav.length; i++) {
            articlesNav[i].setAttribute("data-name", '#article-' + (i + 1));
        }
        for (var _i = 0; _i < articlesList.length; _i++) {
            articlesList[_i].setAttribute("id", '#article-' + (_i + 1));
        }

        var toggle = function toggle() {
            container.classList.toggle("blog__nav_opened");
        };
        var sidebarMove = function sidebarMove() {
            if (blog.getBoundingClientRect().top <= 10) {
                container.classList.add("blog__nav_fixed");
                console.log(window.innerWidth);
                if (window.innerWidth < 768) {
                    articleNavList.style.top = "50%";
                }
                articlesNav.map(function (elem) {
                    var curentLink = elem.getAttribute("data-name");
                    var ref = document.getElementById(curentLink);
                    var rect = ref.getBoundingClientRect();
                    if (rect.top <= 300 && rect.top + rect.height > 0) {
                        articlesNav.map(function (elem) {
                            elem.classList.remove("articles-list__item_active");
                        });
                        elem.classList.add("articles-list__item_active");
                    }
                });
            } else {
                container.classList.remove("blog__nav_fixed");
                articleNavList.style = "";
            }
        };
        var slideTo = function slideTo(e) {
            var curentLink = void 0;
            e.stopPropagation();
            if (e.target.classList.contains("articles__text")) {
                curentLink = e.target.parentNode.getAttribute("data-name");
            } else {
                curentLink = e.target.getAttribute("data-name");
            }
            var ref = document.getElementById(curentLink);
            ref.scrollIntoView({ behavior: "smooth" });
            if (window.innerWidth < 768) {
                articlesNav.map(function (elem) {

                    elem.classList.remove("articles-list__item_active");
                });
                e.target.classList.add("articles-list__item_active");
                container.classList.remove("blog__nav_opened");
            }
        };
        container.addEventListener("click", toggle);
        document.addEventListener("scroll", sidebarMove);

        articleNavList.addEventListener("click", slideTo);
    };

    /***/
}]
/******/);