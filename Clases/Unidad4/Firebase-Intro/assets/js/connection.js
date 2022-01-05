$(document).ready(function(){
    $("#registro").hide();
    

    $("#btn-register").click(function(){
        $("#login-container").hide();
        $("#registro").show();
    })
    // La configuración de Firebase de su aplicación web
    // Para Firebase JS SDK v7.20.0 y versiones posteriores, MeasureId es opcional
    const firebaseConfig = {
        apiKey: "AIzaSyCs_IhKdb_gE0XjkzURoGlnJBtf79Ah2mU",
        authDomain: "proyecto-bootcamp-unicef-27f07.firebaseapp.com",
        projectId: "proyecto-bootcamp-unicef-27f07",
        storageBucket: "proyecto-bootcamp-unicef-27f07.appspot.com",
        messagingSenderId: "495616354191",
        appId: "1:495616354191:web:d24318a7b073e8f4938dfa",
        measurementId: "G-3RYMKGBGJF"
    };

    //Inicializar Firebase
    firebase.initializeApp(firebaseConfig);

    //Inicializar servicio de autentificacion
    const auth = firebase.auth();

    //Login o inicio de sesion
    $("#btn-login").click(function(e){
        e.preventDefault();
        //Variables de inputs
        var correo = $("#mail").val();
        var clave = $("#pass").val();
        //Usar servicio de login de firebase
        auth.signInWithEmailAndPassword(correo,clave)
        .then(userCredential=>{
            alert("Datos Correctos");
        })
        .catch((error) =>{
            let errorCode = error.code;
            let errorMessage = error.message;
            alert("Código: "+errorCode+ ". Mensaje: "+errorMessage);
        }) 
    })

    //Singup o crear cuenta
    $("#btn-singup").click(function(e){
        e.preventDefault();
        //Variables de inputs
        var correo = $("#mail-new").val();
        var clave = $("#pass-new").val();
        //Usar servicio de firebase para crear cuenta
        auth.createUserWithEmailAndPassword(correo,clave)
        .then(userCredential=>{
            $("#login-container").show();
            $("#registro").hide();
            alert("Cuenta creada");
        })
        .catch((error)=>{
            let errorCode = error.code;
            let errorMessage = error.message;
            alert("Código: "+errorCode+". Mensaje: "+errorMessage);
        })
    })
    //Desconexion de usuario
    //Boton LogOut
    $("#btn-logout").click(function(e){
        e.preventDefault();
        auth.signOut().then(() => {
            alert("Sesion Cerrada");
            $("#content").hide();
            $("#login-container").show();
        })
    })

    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    //Inicar sesion con GOOGLE
    $("#btn-login-google").click(function(e){
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then(result => {
            alert("Ingreso con google");
        })
        .catch(error =>{
            alert(error);
        })
    })

    auth.onAuthStateChanged((user)=>{
        if(user){
            //Sesion Iniciada
            $("#login-container").hide();
            $("#content").show();
        }
        else{
            //Sesion finalizada
            $("#login-container").show();
        }
    })

})

