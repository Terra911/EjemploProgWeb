/*Programación de la barra superior de navegación*/ 
function dirigirAHomeDesdeCompra(){
    /*Esta función redirige al usuario a la página pincipal desde las paginas de compra*/
    window.location="../2-main.html"
}

function dirigirALoginDesdeCompra(){
    /*Esta función redirige al usuario a la página de iniciar sesión desde las paginas de compra*/
    window.location="../1-login.html"
}

/*Fin de programación de la barra superior de navegación*/

/*Programación del fomrulario de compra*/ 
function devolverReciboDeCompra(){ 
    /*Esta función busca los inputs en el formulario de compra y los muestra como recibo de compra*/
    let producto = document.getElementById('lista-productos').value
    let cantidad = document.getElementById('cantidad').value

    if (cantidad == 1){
        alert("Usted ha comprado una unidad de " + producto);
    } else{
        alert("Usted ha comprado " + cantidad + " unidades de " + producto);
    }
}

/*Fin de programación del fomrulario de compra*/