document.getElementById("btn-empezar").addEventListener("click",function(){
    var min_number = document.getElementById("min-num").value;
    var max_number = document.getElementById("max-num").value;
    var r = document.getElementById("razon").value;

    for( i = parseInt(min_number); i<= parseInt(max_number);i+=parseInt(r)){
        alert(i);
    }
})