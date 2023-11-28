window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.forms[0]
    const nombre = document.querySelector("#inputNombre")
    const apellido = document.querySelector("#inputApellido")
    const email = document.querySelector("#inputEmail")
    const password = document.querySelector("#inputPassword")
    const url = "https://todo-api.ctd.academy/v1"

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        //Previene que se muestren datos en la url
        event.preventDefault()
        // Para armar el objeto de la request que necesita la API
        const payload = {
            firstName: nombre.value,
            lastName: apellido.value,
            email: email.value,
            password: password.value
            }
        //Configurar la request del FETCH
        const settings = {
                method: "POST",
             //Hay que parsearlo para pasarle los datos al servidor
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
             }
        }
        // Esto es para pasarle el settings a la funcion realizarRegister - Lanzar la consulta a la API
        realizarRegister(settings);

        //Limpiar los campos del form
        form.reset()

    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {

        fetch(`${url}/users`, settings)
        .then( response => {
            console.log(response);
            return response.json()
        })



    };


});