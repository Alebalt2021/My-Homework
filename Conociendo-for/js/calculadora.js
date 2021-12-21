//Crear una funcion para operar
function OperarNumeros(signos){
    //Creacion de variables para mis numeros
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    //Condicionales
    if(signos=="+"){
        return n1 + n2;
    }
    else if(signos=="-"){
        return n1 - n2;
    }
    else if(signos=="*"){
        return n1 * n2;
    }
    else if(signos=="/"){
        return n1 / n2;
    }
    else{
        return "Operacion errónea"
    }
}

//Evento del boton sumar
document.getElementById("sumar").addEventListener("click", function(){
    let resultado= OperarNumeros("+");
    document.getElementById("result").innerHTML = resultado;
});

//Evento del boton restar
document.getElementById("restar").addEventListener("click", function(){
    let resultado= OperarNumeros("-");
    document.getElementById("result").innerHTML = resultado; 
});

//Evento del boton multiplicar
document.getElementById("multiplicar").addEventListener("click", function(){
    let resultado= OperarNumeros("*");
    document.getElementById("result").innerHTML = resultado;  
});

//Evento del boton dividir
document.getElementById("dividir").addEventListener("click", function(){
    let resultado= OperarNumeros("/");
    document.getElementById("result").innerHTML = resultado;  
});