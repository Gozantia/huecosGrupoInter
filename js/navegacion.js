jQuery.datetimepicker.setLocale("es");

//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var lugar;
var horario;

$(document).ready(function () {
  var d = new Date();
  var currMonth = d.getMonth();
  var currYear = d.getFullYear();
  var startDate = new Date(currYear, currMonth, 1);
  var options = {
    allowTimes: [
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
    ],
    minDate: 0,
    startDate: new Date(),
    inline: true,
    mask: "9999/19/39",
    format: "Y/m/d H:i",
    // yearEnd: 2021,
    roundTime: "round",
    disabledWeekDays: [0],
    changeYear: true,
    yearStart: "2021",
    yearEnd: "2021",

    onChangeDateTime: function (dp, $input) {
      cambioEstado3();
    },
  };
  jQuery("#datetimepicker").datetimepicker(options);
});

$(".next").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = now * 50 + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          position: "absolute",
        });
        next_fs.css({ left: left, opacity: opacity });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
  cambioEstado2();
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = (1 - now) * 50 + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          opacity: opacity,
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

var shareItems = document.querySelectorAll(".social_share");
for (var i = 0; i < shareItems.length; i += 1) {
  shareItems[i].addEventListener("click", function share(e) {
    return JSShare.go(this);
  });
}

//validacion paso 1

let fotoAdjunta = document.querySelector("#fotoAdjunta");
let fotoCamara = document.querySelector("#fotoCamara");

$("#pasoFoto").prop("disabled", true);

fotoAdjunta.addEventListener("change", cambioEstado1);
fotoCamara.addEventListener("change", cambioEstado1);

function cambioEstado1() {
  if (jQuery(fotoAdjunta).val() == "" && jQuery(fotoCamara).val() == "") {
    $("#pasoFoto").prop("disabled", true);
  } else {
    $("#pasoFoto").addClass("botonAnimado")
    $("#pasoFoto").prop("disabled", false);
  }
}

//validacion paso 2
let nombre = document.querySelector("#nombre");
let correo = document.querySelector("#correo");
let celular = document.querySelector("#celular");

$("#pasoDatos").prop("disabled", true);
let nombreUsuario = $("#nombre").val();
nombre.addEventListener("keyup", cambioEstado2);
correo.addEventListener("keyup", cambioEstado2);
celular.addEventListener("keyup", cambioEstado2);
function cambioEstado2() {
  var correoValidador = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!correoValidador.test(correo.value) || nombre.value == "" || celular.value.length < 10 ) {

    $("#pasoDatos").prop("disabled", true);
  } else {
    $("#pasoDatos").addClass("botonAnimado")
    $("#pasoDatos").prop("disabled", false);
  }
}
//validacion paso 3

let ciudadCampo = document.querySelector("#ciudadCampo");
let ciudadSeleccionada = ciudadCampo.options[ciudadCampo.selectedIndex].value;
let localCampo = document.querySelector("#localCampo");
let localSeleccionado = localCampo.options[localCampo.selectedIndex].value;

$("#pasoFinal").prop("disabled", true);
$("#localCampo").hide();

ciudadCampo.addEventListener("change", esconderLocal);
localCampo.addEventListener("change", cambioEstado3);

function esconderLocal() {
  $("#localCampo").show("slow");
  $("#pasoFinal").prop("disabled", true);
  var listaLocales = $("#localCampo");
  var opciones = listaLocales.find("option");
  if (opciones.length === 1) {
    listaLocales.val($("#localCampo option:first").val());
    $("#pasoFinal").prop("disabled", false);
  }
}

function cambioEstado3() {
  lugar = $("#localCampo").val();
  console.log("Local seleccionado", lugar);
  $("#lugar").text(lugar);

  var date = $("#datetimepicker").datetimepicker("getValue");
  var hr = date.toLocaleTimeString("es-ES").split(":");

  horario =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    "a las " +
    hr[0] +
    ":" +
    hr[1] +
    ":00";
  $("#horario").text(horario);
  console.log("DATE", date, horario);
  $("#pasoFinal").prop("disabled", true);
  if (lugar != "" && horario != "") {
    $("#pasoFinal").addClass("botonAnimado")
    $("#pasoFinal").prop("disabled", false);
  } else {
    $("#pasoFinal").prop("disabled", true);
  }
}
