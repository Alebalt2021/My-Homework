$(document).ready(function () {
    $("#").hide();
    $("#").hide();
    

    $("#").click(function(){
        $("#").hide();
        $("#").show();
    })

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyBQ3fjGFA8-IdMZF9ZEn8joYNuOdl1PTC0",
    authDomain: "proyecto-twiiter.firebaseapp.com",
    projectId: "proyecto-twiiter",
    storageBucket: "proyecto-twiiter.appspot.com",
    messagingSenderId: "1029774669801",
    appId: "1:1029774669801:web:1fc234869fc716ad22fd78",
    measurementId: "G-QGTNK18WSN"
    };

    //Inicializar Firebase
    firebase.initializeApp(firebaseConfig);

    //Inicializar servicio de autentificacion
    const auth = firebase.auth();

    //Login o inicio de sesion
    $("#btnIngresoConEmail").click(function(e){
        e.preventDefault();
        //Variables de inputs
        var correo = $("IngresoEmail").val();
        var clave = $("#ingresoPassword").val();
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
    $("#registrate").click(function(e){
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

    var providerFace = new firebase.auth.FacebookAuthProvider();
    providerFace.addScope('https://firebase.google.com/docs/auth/web/facebook-login');
    //Inciar sesion con Facebook
    $("#btn-login-facebook").click(function(e){
        e.preventDefault();
        auth.signInWithPopup(providerFace)
        .then(result => {
            alert("Ingreso con Facebook");
        })
        .catch(error =>{
            alert(error);
        })
    })

    auth.onAuthStateChanged((user)=>{
        if(user){
            //Sesion Iniciada
            $("#login-container").hide();
            $("#registro").hide();
            $("#content").show();
            readPosts();
        }
        else{
            //Sesion finalizada
            $("#content").hide();
            $("#login-container").show();
        }
    })

    const db = firebase.firestore();
    //Publicar un nuevo estado
    $("#btn-publish").click(function(e){
        e.preventDefault();
        let postText = $("#status-text").val();
        let date = new Date();
        db.collection("posts").add({
            text: postText,
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
        })
        .then((docRef)=>{
            alert("Estado publicado");
            $("#status-text").val('');
            readPosts();
        })
        .catch((error)=>{
            alert(error);
        })
    })

    function readPosts(){
        db.collection("posts").get().then((posts)=>{
            listPosts(posts.docs);
        })
    }

    function listPosts(data){
        var divContent = $("#post-feed");
        divContent.empty();
        if(data.length > 0){
            let content = "";
            data.forEach(document => {
                let doc = document.data();
                const divPost =`
                <div style='border: solid 2px black'>
                <p>${doc.text}</p> <br>
                <span>Publicado el: ${doc.day}/${doc.month}/${doc.year}.</span>
                </div>
                <hr>
                `;
                content += divPost;
            });
            divContent.append(content);
        }
    }

});