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


let modalDanger = document.getElementById('miModal-danger');
let flexDanger = document.getElementById('flex-danger');
let abrirDanger = document.getElementById('abrir-danger');
let cerrarDanger = document.getElementById('close-danger');


abrirDanger.addEventListener('click', function(){
	'use strict';
	modalDanger.style.display = 'block';
});

cerrarDanger.addEventListener('click', function(){
	modalDanger.style.display = 'none';
});

window.addEventListener('click', function(e){
	if(e.target == flexDanger){
		modalDanger.style.display = 'none';
	}
});