
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({
				 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});

    
 

});

var shareItems = document.querySelectorAll('.social_share');
for (var i = 0; i < shareItems.length; i += 1) {
  shareItems[i].addEventListener('click', function share(e) {
    return JSShare.go(this);
  });
}


//validacion paso 1

let fotoAdjunta = document.querySelector("#fotoAdjunta");
let fotoCamara = document.querySelector("#fotoCamara");

$("#pasoFoto").prop('disabled', true);


fotoAdjunta.addEventListener("change", cambioEstado1);
fotoCamara.addEventListener("change", cambioEstado1);

function cambioEstado1() {
    if ((jQuery(fotoAdjunta).val() == '' && (jQuery(fotoCamara).val() == ''  ) ) ) {
	
        $("#pasoFoto").prop('disabled', true);
    } else {
		$("#pasoFoto").prop('disabled', false);
    }
}

//validacion paso 2
let nombre = document.querySelector("#nombre")
let correo = document.querySelector("#correo")
let celular = document.querySelector("#celular")

$("#pasoDatos").prop('disabled', true);

nombre.addEventListener("keyup", cambioEstado2);
correo.addEventListener("keyup", cambioEstado2);
celular.addEventListener("keyup", cambioEstado2);
function cambioEstado2() {
    if((correo.value== "" || nombre.value == "" || celular.value == ""  )   ) {
	
        $("#pasoDatos").prop('disabled', true);
    } else {
		$("#pasoDatos").prop('disabled', false);
    }
}
//validacion paso 3

let ciudadCampo =document.querySelector("#ciudadCampo")
let ciudadSeleccionada = ciudadCampo.options[ciudadCampo.selectedIndex].value;
let localCampo =document.querySelector("#localCampo")
let localSeleccionado = localCampo.options[localCampo.selectedIndex].value;

$("#pasoFinal").prop('disabled', true);
$("#localCampo").hide();

ciudadCampo.addEventListener("change", esconderLocal);  
localCampo.addEventListener("change", cambioEstado3);  

function esconderLocal(){
	$("#localCampo").show();
	$("#pasoFinal").prop('disabled', true);
	var listaLocales = $('#localCampo');
    var opciones = listaLocales.find('option');
	if (opciones.length === 1) {
		listaLocales.val($("#localCampo option:first").val());
		$("#pasoFinal").prop('disabled', false);

	}
	
}


function cambioEstado3(){

	if ((localSeleccionado !== " " ))
	{	
		$("#pasoFinal").prop('disabled', false);

	}
	else  {
		$("#pasoFinal").prop('disabled', true);
    }

}


