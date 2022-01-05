document.getElementById("btn-nombre").addEventListener("click",function(){
    //CReamos el arreglo
    var nombre = ['Alessandra','Alanis','Celeste','Shirley'];
    //Creamos las variables que serviran como contadores
    var i = 0;
    var t= 0;
    //Creamos el bucle
    while(i < nombre.length & t<2){
        //Imprimimos un item del arreglo
        alert(nombre[i]);
        //Sumamos en 1 el contador del arreglo
        i++;
        //preguntamos si el contador termino una ronda
        if(i==nombre.length){
            //Reinicamos el contador
            i=0;
            //Simamos en 1 el contador de veces
            t++;
        }
    }
})