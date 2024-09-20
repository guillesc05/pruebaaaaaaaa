function devuelveTextoDeAlerta() {
  return "auuuuuu! Vaya aullido";
}

function desaparece(nombre) {
	var button = document.getElementById(nombre);
  button.style.visibility='hidden';
}

function activarDesactivarElemsPorNombre(nombre) {
	var lista = document.getElementsByName(nombre);
	if (lista[0].style.visibility == 'hidden') {
		for (var i = 0; i < lista.length; i++) {
			lista[i].style.visibility = 'visible';
		}
	}
	else {
		for (var i = 0; i < lista.length; i++) {
			lista[i].style.visibility = 'hidden';
		}
	}
}

function setColor(nombre, color) {
	var lista = document.getElementsByName(nombre);
	if (lista[0].style.color != color) {
		for (var i = 0; i < lista.length; i++) {
			lista[i].style.color = color;
		}
	}
	else {
		for (var i = 0; i < lista.length; i++) {
			lista[i].style.color = 'black';
		}
	}
	
}

