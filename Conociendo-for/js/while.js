document.getElementById("btn-empezar").addEventListener("click",function(){
    var min_number = parseInt(document.getElementById("min-num").value);
    var max_number = parseInt(document.getElementById("max-num").value);
    var r = parseInt(document.getElementById("razon").value);

    //var i = 0; -> esto se crea si es que no se tuviera la variable min_number
    while(min_number <= max_number){
        alert(min_number);
        //i++; -> esto se crea si es que no tuviera la variable min_number ni r
        min_number += r;
    }

});