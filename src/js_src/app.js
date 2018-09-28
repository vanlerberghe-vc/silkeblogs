$(document).ready(init);

var TRIGGER_MOBILE_MENU = '.menu-toggle',

    TRIGGER_SEARCH = '.search-toggle',
    EL_SEARCH = '.searchbar',
    EL_HEADER = document.querySelector(idOfHeader),
    CLASS_LAZY = '.lazy';

function init() {
    attachEvents();
    initLazyLoad();
}

function attachEvents() {
    $(TRIGGER_MOBILE_MENU).on('click', handleMobileMenu);
    $(TRIGGER_SEARCH).on('click', handleSearchBar);
    document.addEventListener('scroll', onScroll, false); //code in _header.js
}

function handleMobileMenu() {
    var el = document.querySelector('header');
    var html = document.querySelector('html');

    el.classList.toggle('show-menu');
    html.classList.toggle('no-scroll');
}

function handleSearchBar() {
    var el = document.querySelector('.search');

    el.classList.toggle('open');
}

function initLazyLoad() {
    
    var myLazyLoad = new LazyLoad({
        elements_selector: CLASS_LAZY
    });
}


