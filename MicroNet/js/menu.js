let btnmenu = document.getElementById("btnmenu");
let menu = document.getElementById("menu");
let main = document.getElementById("main");

let sidebar = document.getElementsByClassName("sidebar");

btnmenu.addEventListener('click', function(){
	'use strict';
	menu.classList.toggle('mostrar');
	main.classList.toggle('big');
});