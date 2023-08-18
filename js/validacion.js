$(document).ready(function() {
    
    var formulario = $('#formulario');
    var nombre = $('#nombre');
    var email = $('#email');
    var phone = $('#phone');
    var mensaje = $('#mensaje');


    //Nombre
    function valNombre(e) {

        if (nombre.val() == '' || nombre.val() === null) {
            e.preventDefault();
            $('input[type="text"] + .error').css('display','block');
        } else {
            $('input[type="text"] + .error').css('display','none');
        }
        
    }

    //Correo
    function valEmail(e) {

        if (email.val() == '' || email.val() == null) {
            e.preventDefault();
            $('input[type="email"] + .error').css('display','block');
        } else {
            $('input[type="email"] + .error').css('display','none');
        }
        
    }

    //Telefono
    function valPhone(e) {

        if (phone.val() == '' || phone.val() == null) {
            e.preventDefault();
            $('input[type="tel"] + .error').css('display','block');
        } else {
            $('input[type="tel"] + .error').css('display','none');
        }
        
    }
    

    //Mensaje

    function valMensaje(e) {

        if (mensaje.val() == '' || mensaje.val() == null) {
            e.preventDefault();
            $('textarea + .error').css('display','block');
        } else {
            $('textarea + .error').css('display','none');
        }
        
    }

    function validacion(e) {
        valNombre(e);
        valEmail(e);
        valPhone(e);
        valMensaje(e);
        
    }

    formulario.on('submit', validacion);
})