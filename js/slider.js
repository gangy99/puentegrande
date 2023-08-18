$(document).ready(function(){

    var slider = $('#slider');
    var btnAnterior = $('#btnAnterior');
    var btnSiguiente = $('#btnSiguiente');

    $('#slider .slide:last').insertBefore('#slider .slide:first');

    slider.css('margin-left','-40%');

    //Slide a la derecha

    function moverDerecha() {
        if (!slider.is(':animated')) {
            slider.animate({
                marginLeft:'-103%'
            },700, function () {
                $('#slider .slide:first').insertAfter('#slider .slide:last');
                slider.css('margin-left','-40%');
                resetInterval()
            }); 
        }
        
    }

    btnSiguiente.on('click', moverDerecha);

       //Slide a la izquierda

       function moverIzquierda() {
        if (!slider.is(':animated')){
            $('#slider .slide:last').insertBefore('#slider .slide:first');
            slider.css('margin-left','-103%');
            slider.animate({
                marginLeft: '-43%'
            },700, function () {
                resetInterval()
            });
          }

        }   
    
       btnAnterior.on('click', moverIzquierda);  
       
       //Intervalo

       var intervalo = setInterval(moverDerecha,5000);

       function resetInterval() {
        clearInterval(intervalo);
        intervalo = setInterval(moverDerecha,5000);
       }

});