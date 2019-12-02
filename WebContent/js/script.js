/**
 *  Código para hacer peticiones
 */

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
	console.log(data);
}