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

    var flip = document.querySelector('#flip-container');
    var autorization = document.querySelector("#btn_autorization");
    var button = document.getElementById("hamburger-menu");
    var nav = document.getElementById("navigation");
    var slash = location.href.lastIndexOf("/");
    var container = document.getElementById("parallax");
    var hero = document.getElementById("hero");

    //////
    if (location.href.substr(slash) === "/index.html" || location.href.substr(slash) === "/") {
        Object(__WEBPACK_IMPORTED_MODULE_0__flip__["a" /* default */])(autorization, flip);
    } else {

        Object(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* default */])(button, nav);
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__parallax__["a" /* default */])(hero, container);

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
    __webpack_exports__["a"] = function (section, container) {
        var moveParallax = function moveParallax(e) {
            var initialX = window.innerWidth / 2 - e.pageX;
            var initialY = window.innerHeight / 2 - e.pageY;
            var layer = container.firstElementChild;
            layer.style.transform = 'translate3d(' + initialX * 0.08 + 'px, ' + initialY * 0.08 + 'px, 0)';
        };
        section.addEventListener("mousemove", moveParallax);
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
            console.log("test");
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
}]
/******/);