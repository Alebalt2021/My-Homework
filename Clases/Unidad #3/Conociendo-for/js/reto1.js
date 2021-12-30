document.getElementById("impar").addEventListener("click",function(){
    for(i=1; i<12; i+=2){
        console.log(i);
        alert(i)
    }
});
document.getElementById("par").addEventListener("click",function(){
    for(i=1; i<=12; i+=1){
        console.log(i);
        alert(i)
    }
});