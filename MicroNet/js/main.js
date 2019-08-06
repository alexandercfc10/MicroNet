let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');


abrir.addEventListener('click', function(){
	'use strict';
	modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
	modal.style.display = 'none';
});

window.addEventListener('click', function(e){
	if(e.target == flex){
		modal.style.display = 'none';
	}
});


let modal_recibo = document.getElementById('miModal_recibo');
let flex_recibo = document.getElementById('flex_recibo');
let abrir_recibo = document.getElementById('abrir_recibo');
let cerrar_recibo = document.getElementById('close_recibo');

abrir_recibo.addEventListener('click', function(){
	'use strict';
	modal_recibo.style.display = 'block';
});

cerrar_recibo.addEventListener('click', function(){
	modal_recibo.style.display = 'none';
});

window.addEventListener('click', function(e){
	if(e.target == flex_recibo){
		modal_recibo.style.display = 'none';
	}
});