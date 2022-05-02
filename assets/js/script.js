alert(`Bienvenido al programa de duelo de cachipun contra la cpu...Suerte.`);
var cantidadjugadas=prompt(`Ingrese la cantidad de veces que desee jugar`);
var datocpu=Math.floor(Math.random()*3);
var ganadas=0;
var perdidas=0;
var empates=0
var centinela=0;
while (centinela<cantidadjugadas){
    var datojugador=parseInt(prompt(`ingrese un numero del 0 al 2 siendo: 0 = piedra, 1 = papel y 2 = tijeras.`));
    if(datojugador==0){
        alert(`Escogiste Piedra`);
    }
    else if(datojugador==1){
        alert(`Escogiste Papel`);
    }
    else if(datojugador==2){
        alert(`Escogiste Tijeras`);
    }
    else{
        alert(`El numero ingresado no corresponde a una eleccion valida,`)
    }
    if(datojugador==datocpu){
        alert(`El resultado del duelo de cachipun resulto en empate, ya que, ambos elegieron la misma opcion.`);
        centinela++;
        empates++;
    }
    else if(datojugador==0&&datocpu==1){
        alert(`Haz perdido ya que, piedra pierde contra papel.`);
        centinela++;
        perdidas++;
    }
    else if(datojugador==0&&datocpu==2){
        alert(`Haz ganado ya que, piedra le gana a tijera.`);
        centinela++;
        ganadas++;
    }
    else if(datojugador==1&&datocpu==0){
        alert(`Haz ganado ya que, papel le gana a piedra.`);
        centinela++;
        ganadas++;
    }
    else if(datojugador==1&&datocpu==2){
        alert(`Haz perdido ya que, papel pierde contra tijera.`);
        centinela++;
        perdidas++;
    }
    else if(datojugador==2&&datocpu==0){
        alert(`Haz perdido ya que, tijeras pierde contra piedra`);
        centinela++;
        perdidas++;
    }
    else if(datojugador!=1||2||3){
        alert(`Error en la matrix`)
    }
    else{
        alert(`Haz ganado ya que, Tijeras le gana a papel.`)
        centinela++;
        ganadas++;
    }
}
alert(`Cantidad jugada: ${cantidadjugadas}.`);
if(ganadas>perdidas){
    document.write(`Haz ganado el duelo ya que ganaste ${ganadas} vez (veces) de un total de ${cantidadjugadas}.`);
}
else if(ganadas<perdidas){
    document.write(`Haz perdido el duelo ya que perdiste ${perdidas} vez (veces) de un total de ${cantidadjugadas}.`);
}
else{
    document.write(`Haz empatado el duelo ya que perdiste ${perdidas} vez (veces) y ganaste ${ganadas} vez (veces).`);
}
