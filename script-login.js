var usuario = "Demian"
var contraseña = 1312

function validacion(){ 
    /*Esta función compara los datos ingresados
    en los input del formulario del archivo html con los datos de usuario*/
    let user = document.getElementById('usuario').value
    let clave = document.getElementById('contraseña').value

    console.log(user,clave)
    if (user == usuario && clave == contraseña){
        window.location="2-main.html"
    }
    else{
        alert("Los datos son incorrectos")
    }
    
}