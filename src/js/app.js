var lastKnownScrollY = 0;
var currentScrollY = 0;
var ticking = false;
var idOfHeader = 'header';
//var eleHeader = null;

const classes = {
  pinned: 'header-pin',
  unpinned: 'header-unpin',
};

function onScroll() {
  currentScrollY = window.pageYOffset;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

function update() {
  if (currentScrollY < lastKnownScrollY) {
    pin();
  } else if (currentScrollY > lastKnownScrollY + 10) {
    unpin();
  }
  lastKnownScrollY = currentScrollY;
  ticking = false;
}

function pin() {
  if (EL_HEADER.classList.contains(classes.unpinned)) {
    EL_HEADER.classList.remove(classes.unpinned);
    //EL_HEADER.classList.add(classes.pinned);
  }
}

function unpin() {
  if (EL_HEADER.classList.contains(classes.pinned) || !EL_HEADER.classList.contains(classes.unpinned)) {
    //EL_HEADER.classList.remove(classes.pinned);
    EL_HEADER.classList.add(classes.unpinned);
  }
}

/*window.onload = function() {
  eleHeader = document.getElementById(idOfHeader);
  document.addEventListener('scroll', onScroll, false);
}*/
var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.LazyLoad=t()}(this,function(){"use strict";function e(e){return e.filter(function(e){return!a(e)})}function t(e,t,n){!n&&a(e)||(h(t.callback_enter,e),["IMG","IFRAME","VIDEO"].indexOf(e.tagName)>-1&&(y(e,t),m(e,t.class_loading)),u(e,t),o(e),h(t.callback_set,e))}var n=function(e){var t={elements_selector:"img",container:document,threshold:300,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",class_loading:"loading",class_loaded:"loaded",class_error:"error",callback_load:null,callback_error:null,callback_set:null,callback_enter:null};return _extends({},t,e)},r=function(e,t){return e.getAttribute("data-"+t)},s=function(e,t,n){return e.setAttribute("data-"+t,n)},o=function(e){return s(e,"was-processed","true")},a=function(e){return"true"===r(e,"was-processed")},i=function(e,t){var n,r=new e(t);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:r}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:r})}window.dispatchEvent(n)},c=function(e,t,n){for(var s,o=0;s=e.children[o];o+=1)if("SOURCE"===s.tagName){var a=r(s,n);a&&s.setAttribute(t,a)}},l=function(e,t,n){n&&e.setAttribute(t,n)},u=function(e,t){var n=t.data_sizes,s=t.data_srcset,o=t.data_src,a=r(e,o);switch(e.tagName){case"IMG":var i=e.parentNode;i&&"PICTURE"===i.tagName&&c(i,"srcset",s);var u=r(e,n);l(e,"sizes",u);var d=r(e,s);l(e,"srcset",d),l(e,"src",a);break;case"IFRAME":l(e,"src",a);break;case"VIDEO":c(e,"src",o),l(e,"src",a);break;default:a&&(e.style.backgroundImage='url("'+a+'")')}},d=!("onscroll"in window)||/glebot/.test(navigator.userAgent),f="undefined"!=typeof window,_=f&&"IntersectionObserver"in window,v=f&&"classList"in document.createElement("p"),m=function(e,t){v?e.classList.add(t):e.className+=(e.className?" ":"")+t},b=function(e,t){v?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},h=function(e,t){e&&e(t)},p=function(e,t,n){e.removeEventListener("load",t),e.removeEventListener("error",n)},y=function(e,t){var n=function n(s){g(s,!0,t),p(e,n,r)},r=function r(s){g(s,!1,t),p(e,n,r)};e.addEventListener("load",n),e.addEventListener("error",r)},g=function(e,t,n){var r=e.target;b(r,n.class_loading),m(r,t?n.class_loaded:n.class_error),h(t?n.callback_load:n.callback_error,r)},E=function(e){return e.isIntersecting||e.intersectionRatio>0},w=function(e){return{root:e.container===document?null:e.container,rootMargin:e.threshold+"px"}},L=function(e,t){this._settings=n(e),this._setObserver(),this.update(t)};L.prototype={_setObserver:function(){var t=this;if(_){this._observer=new IntersectionObserver(function(n){n.forEach(function(e){if(E(e)){var n=e.target;t.load(n),t._observer.unobserve(n)}}),t._elements=e(t._elements)},w(this._settings))}},loadAll:function(){var t=this;this._elements.forEach(function(e){t.load(e)}),this._elements=e(this._elements)},update:function(t){var n=this,r=this._settings,s=t||r.container.querySelectorAll(r.elements_selector);this._elements=e(Array.prototype.slice.call(s)),!d&&this._observer?this._elements.forEach(function(e){n._observer.observe(e)}):this.loadAll()},destroy:function(){var t=this;this._observer&&(e(this._elements).forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(e,n){t(e,this._settings,n)}};var I=window.lazyLoadOptions;return f&&I&&function(e,t){if(t.length)for(var n,r=0;n=t[r];r+=1)i(e,n);else i(e,t)}(L,I),L});

/* Placeholders.js v3.0.2 */
(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(D)?(t.removeAttribute(D),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(F),parseInt(n,10)>=0&&(t.setAttribute("maxLength",n),t.removeAttribute(F)),r=t.getAttribute(P),r&&(t.type=r),!0):!1}function a(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(D,"true"),t.value=n,t.className+=" "+I,r=t.getAttribute(F),r||(t.setAttribute(F,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(P),e?t.type="text":"password"===t.type&&M.changeType(t,"text")&&t.setAttribute(P,"password"),!0):!1}function u(t,e){var r,n,a,u,i,l,o;if(t&&t.getAttribute(V))e(t);else for(a=t?t.getElementsByTagName("input"):b,u=t?t.getElementsByTagName("textarea"):f,r=a?a.length:0,n=u?u.length:0,o=0,l=r+n;l>o;o++)i=r>o?a[o]:u[o-r],e(i)}function i(t){u(t,n)}function l(t){u(t,a)}function o(t){return function(){m&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(D)?M.moveCaret(t,0):n(t)}}function c(t){return function(){a(t)}}function s(t){return function(e){return A=t.value,"true"===t.getAttribute(D)&&A===t.getAttribute(V)&&M.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function d(t){return function(){n(t,A),""===t.value&&(t.blur(),M.moveCaret(t,0))}}function g(t){return function(){t===r()&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(D)&&M.moveCaret(t,0)}}function v(t){return function(){i(t)}}function p(t){t.form&&(T=t.form,"string"==typeof T&&(T=document.getElementById(T)),T.getAttribute(U)||(M.addEventListener(T,"submit",v(T)),T.setAttribute(U,"true"))),M.addEventListener(t,"focus",o(t)),M.addEventListener(t,"blur",c(t)),m&&(M.addEventListener(t,"keydown",s(t)),M.addEventListener(t,"keyup",d(t)),M.addEventListener(t,"click",g(t))),t.setAttribute(j,"true"),t.setAttribute(V,x),(m||t!==r())&&a(t)}var b,f,m,h,A,y,E,x,L,T,N,S,w,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],k="#ccc",I="placeholdersjs",R=RegExp("(?:^|\\s)"+I+"(?!\\S)"),V="data-placeholder-value",D="data-placeholder-active",P="data-placeholder-type",U="data-placeholder-submit",j="data-placeholder-bound",q="data-placeholder-focus",z="data-placeholder-live",F="data-placeholder-maxlength",G=document.createElement("input"),H=document.getElementsByTagName("head")[0],J=document.documentElement,K=t.Placeholders,M=K.Utils;if(K.nativeSupport=void 0!==G.placeholder,!K.nativeSupport){for(b=document.getElementsByTagName("input"),f=document.getElementsByTagName("textarea"),m="false"===J.getAttribute(q),h="false"!==J.getAttribute(z),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+I+" { color:"+k+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),H.insertBefore(y,H.firstChild),w=0,S=b.length+f.length;S>w;w++)N=b.length>w?b[w]:f[w-b.length],x=N.attributes.placeholder,x&&(x=x.nodeValue,x&&M.inArray(B,N.type)&&p(N));L=setInterval(function(){for(w=0,S=b.length+f.length;S>w;w++)N=b.length>w?b[w]:f[w-b.length],x=N.attributes.placeholder,x?(x=x.nodeValue,x&&M.inArray(B,N.type)&&(N.getAttribute(j)||p(N),(x!==N.getAttribute(V)||"password"===N.type&&!N.getAttribute(P))&&("password"===N.type&&!N.getAttribute(P)&&M.changeType(N,"text")&&N.setAttribute(P,"password"),N.value===N.getAttribute(V)&&(N.value=x),N.setAttribute(V,x)))):N.getAttribute(D)&&(n(N),N.removeAttribute(V));h||clearInterval(L)},100)}M.addEventListener(t,"beforeunload",function(){K.disable()}),K.disable=K.nativeSupport?e:i,K.enable=K.nativeSupport?e:l}(this);
function log(msg, clear) {
	if (debug === true) {
		if (typeof console == "undefined" || typeof console == undefined || typeof console == null || typeof console == false) {
			return false;
		}
		if (clear === true) {
			console.clear();
		}
		console.log(msg);
	}
}

function line() {
	log('-----------------------')
}
/*

HOW TO USE THIS:

Code samples below.
Whenever you call this function it clears all errors from the targetted form, then validates the input.
Invalid inputs get a class 'has-error' which can be used for visual feedback in the form.



$box = $('.some-div-where-your-form-is-in');

add "validate" class to any input, textarea, select field that needs to be captured
add "required" class to any input, textarea, select that cannot be 'emtpy'
add "email" class to any input, textarea, select that must be a valid email address
add "repeat_password_1" and "repeast_password_2" class to any inputs that must have the same value in them



//capture the values
var validation_result = doValidation($('.some-div-where-your-form-is-in'));



//check if validation succeeded
if(validation-result.success){
	//validation success!
}
else{
	//validation failed
}



//get an object with all the values, which can be used for AJAX posts
var data = validation_result.data;
$.post(some_url, data, handlerFunction);



*/



function doValidation($target) {
	var result = {};
	var data = {};
	result.success = true;
	result.data = data;

	$target.find('.has-error').removeClass('has-error');
	$target.find('input.validate, textarea.validate, select.validate').each(function(index, item) {
		var $item = $(item);
		var propname = $item.attr('name');
		var value = $item.val();
		value = $.trim(value);
		data[propname] = value;

		if ($item.hasClass('required')) {
			if (value == "") {
				result.success = false;
				$item.addClass('has-error');
			}
		}

		if ($item.hasClass('repeat_password_1')) {
			var $repeat_password_2 = $target.find('.repeat_password_2');
			repeat_password_2 = $repeat_password_2.val()
			repeat_password_2 = $.trim(repeat_password_2);

			if (value != repeat_password_2 && repeat_password_2 != "") {
				result.success = false;
				$repeat_password_2.addClass('has-error');
				$item.addClass('has-error');
			}
		}

		if ($item.hasClass('email')) {
			var email_validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
			if (!email_validator.test(value)) {
				result.success = false;
				$item.addClass('has-error');
			}
		}
	})

	return result;
}
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


