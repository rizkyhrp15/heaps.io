// Generated by Haxe 4.0.5
(function ($global) { "use strict";
var JsTools = function() {
	window.document.querySelector(".mobileMenu").onclick = function(e) {
		window.document.querySelector(".top-nav").classList.toggle("open");
		e.preventDefault();
	};
};
JsTools.main = function() {
	new JsTools();
};
JsTools.main();
})({});