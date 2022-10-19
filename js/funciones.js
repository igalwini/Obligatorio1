window.addEventListener("load", inicio);

let sistema = new Sistema();


function inicio(){
	document.getElementById("idBotonRegistrarMarca").addEventListener("click", registrarMarca);
	document.getElementById("idBotonRegistrarCelular").addEventListener("click", registrarCelular);
	document.getElementById("botonAgregarEnTabla").addEventListener("click", agregarEnTabla);
	document.getElementById("botonVaciarTabla").addEventListener("click", limpiarTabla);
}

function registrarMarca(){
	let miForm = document.getElementById("idFormulario1");
	if(miForm.reportValidity()){
		let marca = document.getElementById("idMarca").value;
		let comentario = document.getElementById("idComentarios").value
		let nuevaMarca = new Marca(marca, comentario);
		
		if(!sistema.estaMarca(nuevaMarca)){
			sistema.agregarMarca(nuevaMarca);
			cargarCombo();
			miForm.reset();
		}
		else{
			alert("ESTA MARCA ESTA REPETIDA !!");
			miForm.reset();
		}
		
	}
	
}

function registrarCelular(){
	let miForm = document.getElementById("idFormulario2");
	if(miForm.reportValidity()){
		let marca = document.getElementById("idMarcaCelularesCombo").value;
		let modelo = document.getElementById("idModelo").value;
		let descripcion = document.getElementById("idDescripcion").value;
		let precio = parseInt(document.getElementById("idPrecio").value);
		let pantalla = parseInt(document.getElementById("idPantalla").value);
		let memoria = parseInt(document.getElementById("idMemoria").value);
		let sistOp = document.getElementById("idSist").value;
		let objetoMarca = sistema.darMarca(marca);
		let nuevoCelular = new Celular(objetoMarca, modelo, descripcion, precio, pantalla, memoria, sistOp);
		
		if(!sistema.estaModelo(nuevoCelular)){
			sistema.agregarCelular(nuevoCelular);
			cargarCombo2();
			sistema.cantidadCelularesRegistrados();
			sistema.precioPromedioPorCelular();
			sistema.precioMaximo();
			miForm.reset();
		}
		else{
			alert("ESTE MODELO ESTA REPETIDO !!")
			miForm.reset();
		}
		cargarLista();
		
		}
}
function cargarLista(){
		let lista = document.getElementById("idLista");
		lista.innerHTML = "";
        let datos = sistema.ordenarPorMarca();
		
			for(elemento of datos){
				let nodo = document.createElement("li");
				let nodoTexto = document.createTextNode(elemento.marca + " ("+elemento.comentario+")");
				nodo.appendChild(nodoTexto);
				lista.appendChild(nodo);
	}
}
function cargarCombo(){
	let combo = document.getElementById("idMarcaCelularesCombo");
	combo.innerHTML = "";
	let datos = sistema.darMarcas();
	for(let elemento of datos){
		let nodo = document.createElement("option");
		let nodoTexto = document.createTextNode(elemento);
		nodo.appendChild(nodoTexto);
		combo.appendChild(nodo);
	}
}

function cargarCombo2(){
	let combo = document.getElementById("idModeloComparacionCombo");
	combo.innerHTML = "";
	let celulares = sistema.darCelulares();
	for(let celular of celulares){
		let nodo = document.createElement("option");
		let nodoTexto = document.createTextNode(celular);
		nodo.appendChild(nodoTexto);
		combo.appendChild(nodo);
	}
}
function agregarEnTabla(){
	let modelo = document.getElementById("idModeloComparacionCombo").value;
	let objetoCelular = sistema.darCelular(modelo);
	let tabla= document.getElementById("idTabla");
	let cantidad = tabla.rows.trModelo.cells.length;
	if(cantidad <5 && !repiteModelo(modelo)){
	agregarCelda("trModelo", objetoCelular.modelo);
	agregarCelda("trDescripcion", objetoCelular.descripcion);
	agregarCelda("trMarca", objetoCelular.marca);
	agregarCelda("trMemoria", objetoCelular.memoria+" GB");
	agregarCelda("trPantalla", objetoCelular.pantalla+"´´");
	agregarCelda("trPrecio", objetoCelular.precio+" USD");
	agregarCelda("trSistOp", objetoCelular.sistOp);
	}
	
}
function agregarCelda(id, texto){
	let fila = document.getElementById(id);
	let nodo = document.createElement("td");
	let nodoTexto = document.createTextNode(texto);
	nodo.appendChild(nodoTexto);
	fila.appendChild(nodo);
	
	
}
function limpiarTabla(){
	document.getElementById("trModelo").innerHTML = "";
	document.getElementById("trDescripcion").innerHTML = "";
	document.getElementById("trMarca").innerHTML = "";
	document.getElementById("trMemoria").innerHTML = "";
	document.getElementById("trPantalla").innerHTML = "";
	document.getElementById("trPrecio").innerHTML = "";
	document.getElementById("trSistOp").innerHTML = "";
	agregarCelda("trModelo", "Modelo");
	agregarCelda("trDescripcion", "Descripcion");
	agregarCelda("trMarca", "Marca");
	agregarCelda("trMemoria", "Memoria");
	agregarCelda("trPantalla", "Pantalla");
	agregarCelda("trPrecio", "Precio");
	agregarCelda("trSistOp", "Sistema Operativo");
	
}
function repiteModelo(modelo){
	let tabla= document.getElementById("idTabla");
	let celdas = tabla.rows.trModelo.cells
	let seRepite= false;
for(elem of celdas){
	if(elem.innerText == modelo){
		seRepite=true;
	}
}
	return seRepite;
}

