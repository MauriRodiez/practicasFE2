/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  let nameUser = "",
      yearBorn,
      city = "",
      intrestJs,
      letras = /^[a-zA-Z]+$/;   

      
  do {
    nameUser = prompt("Ingresa tu nombre: ").toLowerCase().trim()
  } while (!/^[a-zA-Z]+$/.test(nameUser) || nameUser === null || nameUser == " " || nameUser.length < 3);
    

    let edad = parseInt(prompt("Ingresa el año en que naciste: "))
    let fecha = new Date();
    let anioActual = fecha.getFullYear();
    datosPersona.edad = parseInt(anioActual - edad);

    datosPersona.ciudad = prompt("Ingresa la ciudad donde vives: ")
    datosPersona.interesPorJs = confirm("Te interesa Javascript?")

    datosPersona.nombre = nameUser;


}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  const name = document.querySelector("#nombre")
  const age = document.querySelector("#edad")
  const city = document.querySelector("#ciudad")
  const interest = document.querySelector("#javascript")

  name.textContent = datosPersona.nombre;
  age.textContent = datosPersona.edad;
  city.textContent = datosPersona.ciudad;
  interest.textContent = (datosPersona.interesPorJs) ? "Si" : " No"

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  const materias = document.querySelector("#fila")

  materias.innerHTML = "";

  listado.forEach( ficha => {
    materias.innerHTML += `
      <div class="caja">
        <img src="${ficha.imgUrl}" alt="${ficha.lenguajes}" />
        <p class="lenguajes">Lenguajes: ${ficha.lenguajes}<p/>
        <p class="bimestre">Bimestre: ${ficha.bimestre}<p/>
      </div>
    `
  });


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  const web = document.querySelector("#sitio");

  web.classList.toggle("dark")
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

function mostrarTexto() {

  const txtOculto = document.querySelector("#sobre-mi")

  window.addEventListener("keydown", (e) => {
    
    if (e.key == "f" || e.key == "F") {
      txtOculto.setAttribute("class", "visibility: visible")       
    }

  })

}

mostrarTexto();