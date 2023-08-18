$(document).ready(function(){

    //Mostrar y ocultar boton

    var btnVolverArriba = $('#btnVolverArriba');

    $(window).on('scroll',function(){

        var proyectosOffsetTop = $('#como-funciona').offset().top;
    
        if ($(window).scrollTop() >= proyectosOffsetTop){
            
            btnVolverArriba.css('margin-right',0);
        }
    
        else if ($(window).scrollTop() <= proyectosOffsetTop/2) {
            
            btnVolverArriba.css('margin-right','-60px');
        }
    
       })


});