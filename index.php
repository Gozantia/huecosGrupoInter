<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <title>Huecos GrupoInter</title>

    <script
      src="https://kit.fontawesome.com/e1fce9e008.js"
      crossorigin="anonymous"
    ></script>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.css"
      integrity="sha512-bYPO5jmStZ9WI2602V2zaivdAnbAhtfzmxnEGh9RwtlI00I9s8ulGe4oBa5XxiC6tCITJH/QG70jswBhbLkxPw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="css/calendar.css" />
    <link rel="shortcut icon" type="icon" href="favicon.ico" />
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body class="md:flex h-screen">
    <header class="grid p-4 md:flex-1 md:h-screen md:content-center">
      <img
        src="logoGrupoInter.svg"
        alt="GrupoInter"
        class="w-1/5 mx-auto mb-3 md: w-2/5"
      />
      <img
        src="img/unHuecoUnDescuento.svg"
        alt="¡Aprovecha!"
        class="w-3/5 m-auto mt-2"
      />
    </header>

    <!-- multistep form -->
    <form
      id="msform"
      onsubmit="return false"
      class="md:flex-1 md:self-center mt-6 md:mt-0"
    >
      <!-- progressbar -->

      <ul id="progressbar">
        <li class="active">Sube la foto</li>
        <li>Pon tus datos</li>
        <li>Agenda la cita</li>
      </ul>
      <!-- fieldsets -->
      <fieldset>
        <div class="text-center">
          <h4>SI CAÍSTE EN UN HUECO</h4>
          <h3>sube la foto aquí.</h3>
        </div>
        <article class="fileChoice flex border border-gray-400 rounded p-2">
          <div class="flex-1 border-r border-gray-600">
            <input
              type="file"
              name="file"
              id="fotoAdjunta"
              placeholder="png, jpg, gif"
              accept="image/*"
              class="opacity-0 filef"
            />
            <label for="fotoAdjunta" class="-mt-16 grid cursor-pointer z-10">
              <i class="icon fa fa-images"></i>
              <span>AGREGAR </span>
              <span>IMAGEN</span>
            </label>
          </div>
          <div class="flex-1">
            <input
              type="file"
              name="file"
              id="fotoCamara"
              accept="image/*"
              capture="camera"
              class="opacity-0 filef"
            />
            <label for="fotoCamara" class="-mt-16 grid cursor-pointer z-10">
              <i class="fas fa-camera-retro"></i>
              <span>TOMAR </span>
              <span>FOTO </span>
            </label>
          </div>
        </article>

        <input
          type="button"
          name="next"
          class="next btn-agendar"
          id="pasoFoto"
          value="RECLAMA TU  DESCUENTO"
        />
      </fieldset>
      <fieldset>
        <article class="font-bold text-3xl grid mb-8">
          <label class="my-2" for="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            class="rounded-md w-full p-2 text-sm text-center"
          />
          <label class="my-2" for="correo">Correo</label>
          <input
            input
            type="email"
            id="correo"
            name="correo"
            class="rounded-md w-full p-2 text-sm text-center"
          />
          <label class="my-2" for="celular">Celular</label>
          <input
            type="tel"
            name="celular"
            id="celular"
            class="rounded-md w-full p-2 text-sm text-center"
          />
        </article>
        <input
          type="button"
          name="previous"
          class="previous btn-atras"
          value="Atrás"
        />
        <input
          type="button"
          name="next"
          class="next btn-agendar"
          id="pasoDatos"
          value="AGENDA TU CITA YA"
        />

        <p class="text-xs text-center mt-2 mx-auto">
          ACTIVANDO EL BOTÓN ACEPTAS NUESTROS
          <a href="#" class="click__me">TÉRMINOS Y CONDICIONES</a>
        </p>
      </fieldset>
      <fieldset>
        <h3>AGENDA TU CITA</h3>
        <h3>PUNTO DE Atención:</h3>

        <div class="custom-select">
          <select
            id="ciudadCampo"
            onchange="getSelectionValue()"
            class="special-select"
            name="ciudad"
            required
          >
            <option value="" disabled selected>Ciudad</option>
            <option></option>
          </select>
          <select id="localCampo" class="special-select" name="local">
            <option value="" disabled selected>Punto</option>
            <option></option>
          </select>
        </div>

        <div id="datep">
          <input id="datetimepicker" type="text" />
        </div>

        <input
          type="button"
          name="previous"
          class="previous btn-atras"
          value="Atrás"
        />
        <input
          type="submit"
          name="submit"
          class="next btn-agendar"
          value="HACER EFECTIVO MI DESCUENTO"
          id="pasoFinal"
        />
      </fieldset>

      <fieldset class="text-center w-9/12 mx-auto" id="section4">
        <h3 class="my-4">¡TU CITA ESTA AGENDADA!</h3>

        <p>
          TU DESCUENTO TE ESTÁ ESPERANDO EN EL PUNTO DE SERVICIO
          <strong id="lugar"> </strong> en la fecha
          <strong id="horario"> </strong>
        </p>

        <p class="my-4">
          RECIBIRÁS UN CORREO DE CONFIRMACIÓN, PRESÉNTALO PARA HACER EFECTIVO TU
          DESCUENTO.
        </p>

        <input
          type="button"
          name="previous"
          class="previous btn-atras"
          value="Modificar algo"
        />

        <article>
          <h4 class="font-bold mt-8 mb-4">Comparte con tus amigos en:</h4>
          <button class="twitter social_share" data-type="twitter">
            Twitter
          </button>
          <button class="facebook social_share" data-type="fb">Facebook</button>
          <button class="whatsapp social_share" data-type="whatsapp">
            Whatsapp
          </button>
        </article>
      </fieldset>
    </form>

    <form
      style="display: none"
      method="post"
      action="https://grupointer.co/huecos/actividadHuecos.php?save1=1"
      enctype="multipart/form-data"
      id="formusuario"
    >
      <input type="text" id="snombre" name="nombre" />
      <input type="text" id="scorreo" name="correo" />
      <input type="text" id="scelular" name="celular" />
    </form>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.full.min.js"
      integrity="sha512-AIOTidJAcHBH2G/oZv9viEGXRqDNmfdPVPYOYKGy3fti0xIplnlgMHUGfuNRzC6FkzIo0iIxgFnr9RikFxK+sw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
      integrity="sha512-0QbL0ph8Tc8g5bLhfVzSqxe9GERORsKhIn1IrpxDAgUsbBGz/V7iSav2zzW325XGd1OMLdL4UiqRJj702IeqnQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script src="/js/jsshare.js"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"
      integrity="sha512-3j3VU6WC5rPQB4Ld1jnLV7Kd5xr+cq9avvhwqzbH/taCRNURoeEpoPBK9pDyeukwSxwRPJ8fDgvYXd6SkaZ2TA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script type="module" src="js/navegacion.js"></script>
    <script src="js/citas.js"></script>
    <script src="js/data.js"></script>
  </body>
</html>
