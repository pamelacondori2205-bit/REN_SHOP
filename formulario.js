
/* VALIDAR FORMULARIO */

const formulario = document.getElementById("miFormulario");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const celular = document.getElementById("celular").value;

        if (nombre.trim() !== "" &&
            correo.trim() !== "" &&
            celular.trim() !== "") {

            document.getElementById("mensajeFormulario").textContent =
                "¡Llenaste correctamente los datos! ♡";

            formulario.reset();

        } else {

            document.getElementById("mensajeFormulario").textContent =
                "Por favor, completa todos los datos.";

        }

    });

}


/* REALIZAR PEDIDOS */

const botones = document.querySelectorAll(".boton-pedido");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const producto = boton.getAttribute("data-producto");

        document.getElementById("mensajePedido").textContent =
            "¡Gracias por tu compra! ♡ Pedido: " + producto;

    });

});
