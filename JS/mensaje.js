$(document).ready(function () {
    let altura = $('.text-area').offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.text-area').addClass('area-fijada');
        } else {
            $('.text-area').removeClass('area-fijada');
        }
    });

});




let msj = [];
let img = [];

let newM = localStorage['texto'];
let newI = localStorage['imagen'];

let nomU = localStorage['nombU'];
let apeU = localStorage['apelU'];
let depU = localStorage['deparU'];
let disU = localStorage['distrU'];






if (nomU.length > 0) {
    $('#nomU1').val(nomU);
    $('#apeU1').val(apeU);
    $('#depaU1').val(depU);
    $('#distU1').val(disU);
}





if (newM.length > 0) {
    let m = newM.split(",");
    let im = newI.split(",");

    msj = m;
    img = im;

    for (var i = 0; i < msj.length; i++) {
        //alert(msj[i] + " " + img[i]);
        $(".text-area").append("<div class='mensaje' id='final'><img src='" + img[i] + "'><h1>" + msj[i] + "</h1></div>");
    }

    localStorage.removeItem('texto');
    localStorage.removeItem('imagen');
}






function mensaje(urlImg, texto) {
    msj.push(texto);
    img.push(urlImg);

    $(".text-area").append("<div class='mensaje' id='final'><img src='" + urlImg + "'><h1>" + texto + "</h1></div>");
    //document.getElementById('area').scrollIntoView(true);
    let area = document.getElementById('area');
    area.scrollLeft = area.scrollWidth;

    decir(texto);
}





function mensajeMeLlamo(urlImg, texto) {

    texto += localStorage.getItem("nombreUsuario") + " - " + localStorage.getItem("apellidoUsuario");

    msj.push(texto);
    img.push(urlImg);

    $(".text-area").append("<div class='mensaje' id='final'><img src='" + urlImg + "'><h1>" + texto + "</h1></div>");
    //document.getElementById('area').scrollIntoView(true);
    let area = document.getElementById('area');
    area.scrollLeft = area.scrollWidth;

    decir(texto);

}





function mensajeVivoEn(urlImg, texto) {

    texto += "departamento de " + localStorage.getItem("departamentoUsuario") + " y en el distrito de " + localStorage.getItem("distritoUsuario");

    msj.push(texto);
    img.push(urlImg);

    $(".text-area").append("<div class='mensaje' id='final'><img src='" + urlImg + "'><h1>" + texto + "</h1></div>");
    //document.getElementById('area').scrollIntoView(true);
    let area = document.getElementById('area');
    area.scrollLeft = area.scrollWidth;

    decir(texto);

}






function leerMensaje() {

    if (msj.length > 0) {
        for (var i = 0; i < msj.length; i++) {
            decir(msj[i]);
        }

    } else {
        alert("No hay mensaje por leer, por favor seleccione un boton para expresar lo que siente.");
    }

}





function borrar() {
    if (msj.length > 0) {
        $(".text-area").html("");

        msj.pop();
        img.pop();

        for (var i = 0; i < msj.length; i++) {
            $(".text-area").append("<div class='mensaje' id='final'><img src='" + img[i] + "'><h1>" + msj[i] + "</h1></div>");
        }

    } else {
        alert("No hay mensaje por borrar");

    }

}






function borrarTodoMsj() {
    if (msj.length > 0) {
        msj.splice(0, msj.length);
        img.splice(0, img.length);

        $(".text-area").html("");

    } else {
        alert("No hay mensaje por borrar");

    }
}





function cambiarPag() {
    localStorage.setItem('texto', msj);
    localStorage.setItem('imagen', img);
}






function decir(text) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}







function abrirForm() {

    if (localStorage.getItem("nombreUsuario") == null || localStorage.getItem("apellidoUsuario") == null || localStorage.getItem("departamentoUsuario") == null || localStorage.getItem("distritoUsuario") == null) {
        let overlay = document.getElementById('overlay');
        let popup = document.getElementById('popup');

        overlay.classList.add('active');
        popup.classList.add('active');

    } else {
        window.location.href = "menuPrincipal.html";

    }


}






function cerrarForm() {
    let overlay = document.getElementById('overlay');
    let popup = document.getElementById('popup');

    $('#nomU').val('');
    $('#apeU').val('');
    $('#depaU').val('');
    $('#distU').val('');

    overlay.classList.remove('active');
    popup.classList.remove('active');
}







function agregarDatos() {
    let nomU = document.getElementById('nomU').value;
    let apeU = document.getElementById('apeU').value;
    let depaU = document.getElementById('depaU').value;
    let distU = document.getElementById('distU').value;

    if (nomU == '' || apeU == '' || depaU == '' || distU == '') {
        alert("Ingrese todos los datos solicitados por favor.");

    } else {
        localStorage.setItem("nombreUsuario", nomU);
        localStorage.setItem("apellidoUsuario", apeU);
        localStorage.setItem("departamentoUsuario", depaU);
        localStorage.setItem("distritoUsuario", distU);

        alert("Datos registrados exitosamente");

        window.location.href = "menuPrincipal.html";
    }

}





function modificarDatos() {
    let nomU = document.getElementById('nomU1').value;
    let apeU = document.getElementById('apeU1').value;
    let depaU = document.getElementById('depaU1').value;
    let distU = document.getElementById('distU1').value;

    if (nomU == '' || apeU == '' || depaU == '' || distU == '') {
        alert("Ingrese todos los datos solicitados por favor.");

    } else {
        localStorage.setItem("nombreUsuario", nomU);
        localStorage.setItem("apellidoUsuario", apeU);
        localStorage.setItem("departamentoUsuario", depaU);
        localStorage.setItem("distritoUsuario", distU);

        alert("Datos registrados exitosamente");

        window.location.href = "menuPrincipal.html";
    }

}











function mostrarDatos() {
    localStorage.setItem('nombU', localStorage.getItem("nombreUsuario"));
    localStorage.setItem('apelU', localStorage.getItem("apellidoUsuario"));
    localStorage.setItem('deparU', localStorage.getItem("departamentoUsuario"));
    localStorage.setItem('distrU', localStorage.getItem("distritoUsuario"));

}