//Variables: Array div
var names = ["EXO","Blackpink","TXT","Blackpink","Mamamoo"];
var content2 = document.getElementById("array-index-methods");
var results = document.getElementById("results-content");

//Moostar datos del array al cragar pagina
showData(names,content2);

//Variables de botones
let btnIndexOf = document.getElementById("btn-Indexof");
let btnLastIndexOf = document.getElementById("btn-Lastindexof");
let btnIncludes = document.getElementById("btn-Includes");
let btnFind = document.getElementById("btn-Find");
let btnFindIndex = document.getElementById("btn-FindIndex");
let btnFilter = document.getElementById("btn-Filter");

// Variables para los input
let inputString = document.getElementById("ip-search").value;
let inputInt = document.getElementById("ip-index").value;

//Anclar funciones a los botones
btnIndexOf.onclick = fIndexOf;
btnLastIndexOf.onclick = fLastIndexOf;
btnIncludes.onclick = fIncludes;
btnFind.onclick = fFind;
btnFilter.onclick = fFilter;

//Funciones
function fIndexOf(){
    let inputString = document.getElementById("ip-search").value;   
    let i = names.indexOf(inputString);
    let mensaje = "El indice de este item " +i;
    results.innerHTML = "<span>"+mensaje+"</span>";
}
function fLastIndexOf(){
    let inputString = document.getElementById("ip-search").value;  
    let i = names.lastIndexOf(inputString);
    let mensaje = "El ultimo indice de este item " +i;
    results.innerHTML = "<span>"+mensaje+"</span>";
}
function fIncludes(){
    let inputString = document.getElementById("ip-search").value;  
    let inputInt = document.getElementById("ip-index").value;
    let number = 0;
    if(inputInt!=''){
        number = parseInt(inputInt);
    }
    let i = names.includes(inputString,number);
    let mensaje = "Este elemento no se encuentra ";
    if(i){
        mensaje="Este valor si se encuentra";
    }
    results.innerHTML = "<span>"+mensaje+"</span>"
}
function fFind(){
    let inputInt = document.getElementById("ip-index").value;
    let number = 0;
    if(inputInt!=''){
        number = parseInt(inputInt);
    }
    let s = names.find(element => element.length > number);
    let mensaje = "Ninguno de los elementos cumple con la condicion";
    if(s !=null){
        mensaje = "El primer valor encontrado es "+s;
    }
    results.innerHTML = mensaje;
}
function fFilter(){
    var inputInt = document.getElementById("ip-index").value;
    let number=0;
    if(inputInt!=""){
        number = parseInt(inputInt);
    }
    let s = names.filter(element => element.length > number);
    let mensaje = "Ninguno de los elementos cumple con la condición";
    if(s.length > 0){
        showData(s,results);    
    }
    else{
        results.innerHTML = mensaje;
    }
}

function showData(array,div){ 
    let lst="";
    for(i=0;i < array.length;i++){
        lst += "<p class='item'>"+array[i]+"</p>";
    }
    div.innerHTML=lst;
}