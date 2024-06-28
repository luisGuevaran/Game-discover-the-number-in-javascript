let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1) ? 'intento' :'intentos'} `);//operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //el usuario no acerto
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    //forma 1
    // let valorCaja=document.querySelector('#valorUsuario');
    // valorCaja.value = '';
    //forma 2
    document.querySelector('#valorUsuario').value = '';
    //forma 3
    // document.getElementById('valorUsuario').value = '';
}

function condicionesInicales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica el número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensasje de intervalo de números
    //generar el numero aleatorio
    //inicializar el número de intentos
    condicionesInicales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles, el juego se reinicia');
        asignarTextoElemento('p', `Indica el número del 1 al ${numeroMaximo}`);
        listaNumerosSorteados = [];
        return generarNumeroSecreto(); // Generar un nuevo número secreto
    } else{
    //si el numero generado esta incluido en la lista    
    if (listaNumerosSorteados.includes(numeroGenerado)){
        //generar otro numero
        return generarNumeroSecreto();
    }
    else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
condicionesInicales();

//función flecha
// saludo=() => alert("¡Hola, mundo!");

// saludo();

// hola=(x='Luis')=>alert(`¡Hola,${x}!`);
// hola();

// doble=(num)=>alert(`El doble del numero es ${num*2}`);

// let num=parseInt(prompt("ingresa un numero:"));
// doble(num);

// promedio=(num1,num2,num3)=>alert(`el promedio de los tres numero es: ${(num1+num2+num3)/3}`);
// let num1=parseInt(prompt("ingresa un numero:"));
// let num2=parseInt(prompt("ingresa un numero:"));
// let num3=parseInt(prompt("ingresa un numero:"));
// promedio(num1,num2,num3);

// mayor=(nume,nume1)=>{
//     if (nume>nume1)return nume;
//     else return nume1;
// }
// let nume=parseInt(prompt("ingresa un numero:"));
// let nume1=parseInt(prompt("ingresa un numero:"));
// alert(`El mayor de los dos numero es: ${mayor(nume,nume1)}`);

// muiplicacion=(numero)=>numero*numero;
// let numero=parseInt(prompt("ingresa un numero:"));
// alert(`La multiplicación del numero es: ${muiplicacion(numero)}`);


// function iMC(altura,kg) {
//     return kg / (altura *altura);
    
// }
// let altura=parseFloat(prompt("ingresa tu altura en metros:"));
// let kg=parseFloat(prompt("ingresa tu peso en kilogramos:"));
//  console.log(`Tu IMC es ${iMC(altura,kg)}`);

// function factorial(numero){
//     if (numero === 0 || numero === 1) {
//         return 1;
//       } else {
//         return numero * factorial(numero - 1);
//       }
//     }
// let num=parseInt(prompt("ingresa un numero:"));
// console.log(`El factorial de ${num} es ${factorial(num)}`);

// function convertirDolaresAReales(dolares) {
//     var cotizacionDolar = 4.80;
//     var reales = dolares * cotizacionDolar;
//     return reales;
//   }
//   // Ejemplo de uso
//   let valorEnDolar = 50;
//   let valorEnReales = convertirDolaresAReales(valorEnDolar);
//   console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);



// LISTAS
//push agrega datos al final de la lista
// let numeroSorteado = [];
// numeroSorteado.push(5);
// console.log(numeroSorteado);
// numeroSorteado.push(8);
// console.log(numeroSorteado);
// console.log(numeroSorteado.length);//tamaño
// console.log(numeroSorteado[0]);
// numeroSorteado.push(3);
// console.log(numeroSorteado);
// console.log(numeroSorteado.length);
// console.log(numeroSorteado[numeroSorteado.length-1]);//elemento final de la lista
// numeroSorteado.push(9);
// console.log(numeroSorteado[numeroSorteado.length-1]);

// numeroSorteado.forEach(function (elemento,indice,array){
//     console.log(`el elemento ${elemento} esta en la posicion ${indice} de la lista`);
// });

// console.log(numeroSorteado.pop());//elimina el ultimo elemento
// console.log(numeroSorteado.unshift(3));//añade al comienzo
// //shift elimina el primer elemento
// //encontrar el indice de un elemto
// console.log(numeroSorteado.indexOf(9));
// //splice(posicion del primer elemento a eliminar, numero de elemtos a eliminar) elimina elementos segun deseemos
// //tambien gurda los elementos eliminados en una variable

// //podemos copiar un array cn slice let copiaArray = vegetales.slice();

// let decadas = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
// //no son las mismas posiciones, la posicion en js es en string 
// console.log(decadas['2']);
// console.log(decadas['02']);

