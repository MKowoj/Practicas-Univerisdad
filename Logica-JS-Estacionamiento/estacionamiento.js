/*
Autor: Manuel Cohuo
Fecha: 13/10/2024

En este ejercicio los vehiculos siempre deben ir con la primer letra en mayúscula.
*/

//Crea lista vacía
var estacionamiento = ["Rojo","Gris","Azul","Amarillo","Verde",];
//Define el tamaño del estacionamiento, 6 espacios disponibles
let tamanoEstacionamiento = 6;
//Contadores
let suma = 0;
let suma1 = 0;
let suma2 = 0;
let suma3 = 0;
let encontrado = false; //parto de la idea de que el auto ya no está en el estacionamiento

//Ciclo para mostrar los vehículos y sus posiciones en el estacionamiento
for(let i = 0; i < tamanoEstacionamiento; i++){
    alert("Ingresa: " + estacionamiento[i] + " en la posicion i = " + i);
    //Suma solo si se acepta un vehiculo
    if(estacionamiento[i] != null){
        suma += 1;
    }
}
//Imprime el total de vehiculos al momento
alert("En el estacionamiento hay: " + suma + " vehiculos");

//En el arreglo anterior, agrega un vehículo blanco en el puesto vacío
estacionamiento[5] = "Blanco";

//Sustituye el vehículo azul por uno negro
estacionamiento[2] = "Negro";

//Elimina el vehiculo rojo de la lista
estacionamiento.shift();

//Imprime los cambios realizados.
alert("C A M B I O S\n1. Ingresa auto Blanco\n2. Se reemplaza auto Azul por Negro\n3. Se retira auto Rojo y se recorren los lugares.");

//Recorre nuevamente la lista con las posiciones actualizadas.
for(let i = 0; i <tamanoEstacionamiento; i++){
    alert("En la posicion i = " + i + " se encuentra el vehículo: " + estacionamiento[i]);
    if(estacionamiento[i] != null){
        suma2 += 1;
    }
}
alert("Cantidad de vehículos en el estacionamiento: " + suma2 + " vehiculos");

//Elimina el ultimo dato de la lista, corresponde al vehiculo blanco.
estacionamiento.pop();

//Recorre el estacionamiento con los cambios hechos. en estacionamiento[0]=Gris y en estacionamiento[3]=amarillo
alert("C A M B I OS \n Se retira el vehículo Blanco del estacionamiento.\nA continuación...");
for(let i = 0; i <tamanoEstacionamiento; i++){
    alert("En la posicion i = " + i + " se encuentra le vehículo: " + estacionamiento[i]);
    if(estacionamiento[i] != null){
        suma3 += 1;
    }
}
alert("Ahora el estacionamiento tiene: " + suma3 + " vehiculos");

//Convierte a minuscula el valor del auto amarillo para comparar con la condicion if que se usa minuscula para ello.
for(let i = 0; i <tamanoEstacionamiento; i++){
    if(estacionamiento[i] == "Amarillo"){
        alert("El chofer del auto Amarillo va personalmente por él.\nSu auto se encuentra en la posición i = " + i);
    }
}

//Funcion que solicita al usuario buscar un color de auto, suponiendo amarillo y devuelve su posicion en el estacionamiento
function vehiculo(colorVehiculo){
    alert("Solicitaste información del vehiculo: " + colorVehiculo);
    for(let i = 0; i <tamanoEstacionamiento; i++){
        while(estacionamiento[i] == colorVehiculo){
            encontrado = true; //al hallar el auto cambio el valor de false a true
            posicion = i; //almacena la posición del vehículo solicitado
            break;
        }
    }

    //Condicional para mostrar el color del vehiculo y su posicion si true es verdadero
    if(encontrado == true){
        alert("El vehiculo: " + colorVehiculo + " se encuentra en la posicion: " + posicion);
    }else{
        alert("No encontramos el vehículo. Probablemente ya se retiró del estacionamiento o escribió mal el color");
    }
}

//declaro la variable del color del vehiculo
let colorVehiculo;

//Solicita al usuario ingresar el color del auto que le interesa consultar
colorVehiculo = prompt("Escribe el color del auto que quiere consultar: ");
//Se llama a la funcion vehiculo
vehiculo(colorVehiculo);