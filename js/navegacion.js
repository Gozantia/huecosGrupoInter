$(document).ready(function(){

    $("#section2").hide();
    $("#section3").hide();
    $("#section4").hide();
    
    $("#reclama").click(function(){
        $("#section1").hide();
        $("#section2").show();
    });

    $("#agenda").click(function(){
        $("#section2").hide();
        $("#section3").show();
    });

    $("#descuento").click(function(){
        $("#section3").hide();
        $("#section4").show();
    });

  });