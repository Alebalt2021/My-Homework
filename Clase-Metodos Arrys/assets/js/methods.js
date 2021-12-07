//Variables: Array y div
var names = ["EXO","Blackpink","TXT","Mamamoo"];
var content = document.getElementById("array-content");
var newContent = document.getElementById("new-arrays-content");

//Moostar datos del array al cragar pagina
showData(names,content);

//Variables de botones
let btnPush = document.getElementById("btn-Push");
let btnPop = document.getElementById("btn-Pop");
let btnUnshift = document.getElementById("btn-Unshift");
let btnShift = document.getElementById("btn-Shift");
let btnSlice = document.getElementById("btn-Slice");
let btnConcat = document.getElementById("btn-Concat");
let btnSplice = document.getElementById("btn-Splice");

//Anclar funciones a los botones
btnPush.onclick = fPush;
btnPop.onclick = fPop;
btnUnshift.onclick = fUnshift;
btnShift.onclick = fShift;
btnSlice.onclick = fSlice; 
btnConcat.onclick = fConcat;
btnSplice.onclick = fSplice;

//Funciones
function fPush(e){
    names.push("BTS");
    showData(names,content);
}

function fPop(e){
    names.pop();
    showData(names,content);
}
function fUnshift(e){
    names.unshift("SuperJunior");
    showData(names,content);
}
function fShift(e){
    names.shift();
    showData(names,content);
}

function fSlice(e){
    b = 0
    e = 2
    let newArray = names.slice(b,e);
    showData(newArray, newContent);
}

function fConcat(e){
    colorsArray = ["Rosa","Negro","Dorado"]
    mergeArray = names.concat(colorsArray);
    showData(mergeArray,newContent)
}

function fSplice(e){
    b = 1;
    c = 3;
    newString = "Juanito";
    names.splice(b,c,newString);
    showData(names,newContent);
}

function showData(array,div){ 
    let lst="";
    for(i=0;i < array.length;i++){
        lst += "<p class='item'>"+array[i]+"</p>";
    }
    div.innerHTML=lst;
}