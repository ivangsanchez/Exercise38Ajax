/**
 *  Código para hacer peticiones
 */
var tablaPerro =document.getElementById("tablaPerros");
console.log(tablaPerro);

function traerdatosperro(){
	//crear un objeto para realizar peticion
	var request = new XMLHttpRequest();
	
	//configurar que hacer con la respuesta,4 y 200
	request.onreadystatechange = function()
	{
		if(this.readyState == 4 && this.status ==200){
			visualizarDatos(this.responseText);
		}
		
		console.log(this.readyState);
	}
	
	//Preparar la peticion
	//Indicar la ruta
	// Indicar el metodo o verbo HTTP
	request.open("GET","perro.json",true);
	
	//Enviar la Petición
	request.send();	
}

function visualizarDatos(data)
{
	var table =document.getElementById("tablaPerros");
	var listaPerros =JSON.parse(data);
	for(i=0;i<listaPerros.length;i++){
		var perro = listaPerros[i];
		crearFila(perro);
	}
}

function crearFila(perro){
	//CREACION DE ELEMENTO DE LA VISTA//
	
	//recuperando el tbody de la tabla
	var tbody=tablaPerros.tBodies[0];
	
	//crear fila
	var row = document.createElement("tr");
	
	// crear celdas para los datos de perro
	var tdNombre= document.createElement("td");
	var tdEdad= document.createElement("td");
	var tdPeso= document.createElement("td");
	var tdVivo= document.createElement("td");
	var tdPropietario= document.createElement("td");
	var tdCuidado= document.createElement("td");
	
	//Configuración de los datos
	tdNombre.innerText=perro.perro;
	tdEdad.innerText=perro.edad;
	tdPeso.innerText=perro.peso;
	tdVivo.innerText=perro.estaVivo;
	tdPropietario.innerText=perro.propietario.nombre;
	tdCuidado.innerText=perro.cuidados[0];
	
	//Agregar las celdas con datos a la fila
	row.appendChild(tdNombre);
	row.appendChild(tdEdad);
	row.appendChild(tdPeso);
	row.appendChild(tdVivo);
	row.appendChild(tdPropietario);
	row.appendChild(tdCuidado);
	
	//agregar la fila a la tabla
	tbody.appendChild(row);
}

