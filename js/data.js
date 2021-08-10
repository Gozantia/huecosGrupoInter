var id = 0;
$(document).ready(function () {
  $("#fotoAdjunta, #fotoCamara").change(function () {
    $("#formusuario .filef").remove();
    $("#formusuario").append($(this));
  });
  $("#pasoDatos").click(sendPaso1);
  $("#formusuario").submit(function (event) {
    event.preventDefault();
    var f = $(this);
    var formData = new FormData(document.getElementById("formusuario"));
    //formData.append("nombre", "valor");

    $.ajax({
      url: "https://grupointer.co/huecos/actividadHuecos.php?save1=1",
      type: "post",
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (response) {
        console.log(response);
        id = response.status;
      },
    });
  });
  $("#pasoFinal").click(sendAll);
});
function sendPaso1(e) {
  var files = $("#fotoAdjunta")[0].files;
  $("#snombre").val($("#nombre").val());
  $("#scorreo").val($("#correo").val());
  $("#scelular").val($("#celular").val());
  $("#sfile").val($("#fotoAdjunta").val());
  $("#formusuario").trigger("submit");

  //   $.post(
  //     "https://grupointer.co/huecos/actividadHuecos.php?save1=1&rd=" +
  //       Math.random(),
  //     info
  //   ).done(function (msg) {
  //     console.log("Data Saved: " + msg);
  //   });
}
function sendAll() {
  var date = $("#datetimepicker").datetimepicker("getValue");
  var hr = date.toLocaleTimeString("es-ES").split(":");

  var horario =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    hr[0] +
    ":" +
    hr[1] +
    ":00";
  var info = {
    id: id,
    ciudad: $("#ciudadCampo").val(),
    punto: $("#localCampo").val(),
    fecha: horario,
  };
  $.post(
    "https://grupointer.co/huecos/actividadHuecos.php?save2=1&rd=" +
      Math.random(),
    info
  ).done(function (msg) {
    console.log("Data Saved: " + msg);
  });
}
