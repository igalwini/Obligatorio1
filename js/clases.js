
class Sistema{
	constructor(){
		this.registroCelulares = [];
		this.registroMarcas = [];
	}
	agregarCelular(unCelular){
		this.registroCelulares.push(unCelular);
		
	}
	darCelulares(){
		return this.registroCelulares
	}
	agregarMarca(unaMarca){
		this.registroMarcas.push(unaMarca);
		
	}
	darMarcas(){
		return this.registroMarcas;
	}
	darCelular(miModelo){
		let res;
		for(let celular of this.registroCelulares){
			if(celular.modelo == miModelo){
				res = celular;
			}
		}
		return res;
	}
	darMarca(miMarca){
		let res;
		for(let marca of this.registroMarcas){
			if(marca.marca == miMarca){
				res = marca;
			}
		}
		return res;
	}
	cantidadCelularesRegistrados(){
		let cantidadCelularesRegistrados = this.registroCelulares.length;
		let lugar = document.getElementById("celRegis");
		lugar.innerHTML = "Cantidad de celulares registrados: " + cantidadCelularesRegistrados;
	}
	cuantosCelulares(marca){
			let celulares= this.registroCelulares;
	        let cant=0;
			for(let elemento of celulares){
				if(elemento.marca == marca){
					cant++}
		}
		return cant
	}
	ordenarPorMarca(){	
		let lista =[];
		let max = 0;
		for (let marca of sistema.registroMarcas){
			let cant = this.cuantosCelulares(marca);
			if (cant > max){
				max = cant;
				lista = [marca];
			}
			else {
				if (cant==max){
				lista.push(marca);
				}
			}
		}
		lista.sort(function (a,b){return a.compararCon(b)})
		return lista;
	}
	/*
	marcaConMasCelularesRegistrados(miCelular){
		let cantCelus = this.registroCelulares.length;
		for(let elem of cantCelus){
			if(elem.marca == miCelular)
		}
	}
	*/
	/*
	marcaConMasCelularesRegistrados(){
		let res = [];
		
		for(let elem of this.registroCelulares){
			for(let i = 0; i< res.length; i++){
				let esta = true;
				if(elem.marca != res[i]){
					esta = false;
				}
				if(!esta){
					res.push(elem.marca)
				}
			}
		}
		return res;
	}
	*/
	precioPromedioPorCelular(){
		let suma = 0;
		let cant = 0;
		for(let celular of this.registroCelulares){          
			cant = cant + 1
			suma = suma + parseInt(celular.precio)
		}
		let lugar = document.getElementById("precioProm"); 
		lugar.innerHTML = "Precio promedio por celular: " + parseInt(suma/cant);
	}
	
	precioMaximo(){
		let max = 0;
		let celular;
		for(let i = 0; i<this.registroCelulares.length;i++){
			if(this.registroCelulares[i].precio > max){
				max = this.registroCelulares[i].precio;
				celular = this.registroCelulares[i];
			}
		}
		
		let lugar = document.getElementById("celCaro");
		lugar.innerHTML = "El celular mas caro es: " + celular +" ( Marca: "+ celular.marca + " Descripcion: "+celular.descripcion+" Precio: "+celular.precio+" Memoria: "+celular.memoria+" Pantalla: "+celular.pantalla+" Sistema Operativo: "+ celular.sistOp+" )"
	}
	
	estaMarca(nuevaMarca){
		let esta = false;
		for (let i = 0; i < this.registroMarcas.length && !esta; i++){
			if (this.registroMarcas[i].marca.toUpperCase() == nuevaMarca.marca.toUpperCase()){
				esta = true;
			}
		}
		return esta;
	}
	estaModelo(nuevoCelular){
		let esta = false;
		for(let i = 0; i<this.registroCelulares.length && !esta; i++){
			if(this.registroCelulares[i].modelo.toUpperCase() == nuevoCelular.modelo.toUpperCase()){
				esta = true;
			}
		}
		return esta;
	}
	
}
class Marca {
	constructor(marca, comentario){
		this.marca = marca;
		this.comentario = comentario;
	}
	compararCon(otraM){
	
		return this.marca.localeCompare(otraM.marca);
	}
	toString(){
		return this.marca ;
	}
}







class Celular{
	constructor(marca, modelo, descripcion, precio, pantalla, memoria, sistOp){
		this.marca = marca;
		this.modelo = modelo;
		this.descripcion = descripcion;
		this.precio = precio;
		this.pantalla = pantalla;
		this.memoria = memoria;
		this.sistOp = sistOp;
	}
	toString(){
		return this.modelo;
	}
	
}