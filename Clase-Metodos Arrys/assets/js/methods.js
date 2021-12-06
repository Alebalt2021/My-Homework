//Variables: Array y div
var names = ["EXO","Blackpink","TXT","Mamamoo"];
var content = document.getElementById("array-content");

//Moostar datos del array al cragar pagina
showData();

//Variables de botones
let btnPush = document.getElementById("btn-Push");
let btnPop = document.getElementById("btn-Pop");
let btnUnshift = document.getElementById("btn-Unshift");
let btnShift = document.getElementById("btn-Shift");

//Anclar funciones a los botones
btnPush.onclick = fPush;
btnPop.onclick = fPop;
btnUnshift.onclick = fUnshift;
btnShift.onclick = fShift;

//Funciones
function fPush(e){
    names.push("BTS");
    showData();
}

function fPop(e){
    names.pop();
    showData();
}
function fUnshift(e){
    names.unshift("SuperJunior");
    showData();
}
function fShift(e){
    names.shift();
    showData();
}
function showData(){ 
    let lst="";
    for(i=0;i < names.length;i++){
        lst += "<p class='item'>"+names[i]+"</p>";
    }
    content.innerHTML=lst;
}