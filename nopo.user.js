// ==UserScript==
// @name        NoPodemos
// @namespace   http://www.lalala.la/
// @version     0.1.0.0
// @description Marcar noticias sobre Podemos
// @match       https://www.meneame.net/*
// @updateURL   https://raw.github.com/jacobino1789/noposcript/master/nopo.user.js
// @copyright   jacobino1789 Licencia GPL
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// ==/UserScript==

$(document).ready(function() {
  
  var elements = $('.news-body > h2');
  
  elements.each(function() { 
    
    var titular = $(this).text();
    
    console.log(titular);
 
    var podemitas = ['Podemos', 'Pablo Iglesias', 'Errejón', 'Alberto Garzón', 'Pablo Echenique', 'Bescansa', 
                     'Monedero', 'Irene Montero', 'Teresa Rodríguez', 'Kichi', 'Ramón Espinar', 'Pablo Soto',
                     'Guillermo Zapata', 'Tania Sánchez', 'Rita Maestre', 'pablista', 'errejonista', 
                     'podemismo', 'podemista', 'Pablista', 'Errejonista', 'Podemismo','Podemista', 'PODEMOS'];
    
    // si se menciona a Podemos o a podemitas en el titular
    marcar = false; $(podemitas).each(function() {marcar = marcar || titular.includes(this);});  
       
    if (marcar) { 
      
      $(this).parent().css('background-color','#612D62'); // fondo morado Podemos
      $(this).children('a').css('color','white');         // letra enlace blanca más visible

      //console.log("PODEMOS alert! : " + titular.trim());

    } else if (titular.includes('Fernando Alonso')) {     
      
      $(this).parent().css('background-color','#FF00FF'); // fucsia xD
      
      //console.log("Alonso alert! : " + titular.trim());
    }
  
  });

});
