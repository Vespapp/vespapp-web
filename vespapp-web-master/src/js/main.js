{% load i18n %}

(function(w, $) {
  // Carousel
  jQuery(function($) {
    $('.carousel').carousel({
      interval: 6500,
      keyboard: true
    });
  });
})(window, jQuery);

function errorForm(msg){
  swal({
      title: "Ups!",
      text: msg,
      type: "error",
      timer: 10000,
      animation: "pop",
      confirmButtonText: gettext("Vale")
  });
}

function successProfile(msg){
  swal({
      title: "Yuju!",
      text: msg,
      type: "success",
      timer: 10000,
      animation: "pop",
      confirmButtonText: gettext("Vale")
  });
}

function successLogOut(msg){
  swal({
      title: gettext("¡Te echaremos de menos!"),
      text: msg,
      type: "success",
      timer: 10000,
      animation: "pop",
      confirmButtonText: gettext("Vale")
  });
}

function successUpLogged(){
  swal({
      title: gettext("¡Gracias por enviar tu avispamiento!"),
      text: gettext("Muchas gracias por tu colaboración ;)"),
      type: "success",
      timer: 10000,
      animation: "pop",
      confirmButtonText: gettext("Vale")
  });
}

function successUp(msg){   
  swal({
    title: gettext("¡Gracias por enviar tu avispamiento!\n\nPor favor, regístrate para que podamos contactar contigo en caso de emergencia."),
    text: msg,
    type: "info",
    showCancelButton: true,
    cancelButtonText: gettext("No, gracias."),
    confirmButtonColor: "#55dd57",
    confirmButtonText: gettext("¡Registrarme! o Login"),
    closeOnConfirm: false,
    closeOnCancel: false,
  },
  function(isConfirm){
    if (isConfirm) {
      window.location = '/login/';
    }else {  
      swal({
        title: gettext("Puedes registrarte en cualquier otro momento"),
        text: gettext("Muchas gracias por tu colaboración ;)"),
        type: "success",
        timer: 10000,
        confirmButtonText: gettext("Vale"),
      },
      function(isConfirm){
        if (isConfirm) {
          window.location = '/';
        }
      });
    }    
  });
}


function successSendMessage(msg){
  swal({
      title: gettext("¡Gracias por contactar con nosotros!"),
      text: msg,
      type: "success",
      timer: 10000,
      animation: "pop",
      confirmButtonText: gettext("Vale")
  });
}