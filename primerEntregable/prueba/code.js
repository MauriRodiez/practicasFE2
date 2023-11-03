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
    interestJs,
    fecha = new Date(),
    anioActual = fecha.getFullYear()
        
do {
    nameUser = prompt("Ingresa tu nombre: ").toLowerCase().trim()     
     if(/^[a-zA-Z\s]+$/.test(nameUser)){
      let usuarios = nameUser.split(" ")
      nameUser = usuarios
        .map((user) => user.charAt(0).toUpperCase() + user.slice(1))
        .join(" ");
     }
  } while (/^[0-9]+$/.test(nameUser) || nameUser === null || nameUser == "" || nameUser.length < 3);

do {
    yearBorn = parseInt(prompt("Ingresa el año en que naciste: "))
  } while (!/^\d{4}$/.test(yearBorn) || yearBorn === null || yearBorn == " ");

do {
    city = prompt("Ingresa la ciudad donde vives: ").toLowerCase().trim()
      if(/^[a-zA-Z\s]+$/.test(city)){
        let ciudades = city.split(" ")
        city = ciudades
          .map((ciudad) => ciudad.charAt(0).toUpperCase() + ciudad.slice(1))
          .join(" ");
      }
  } while (/^[0-9]+$/.test(city) || city === null || city == "" || city.length < 3);
    

interestJs = confirm("Te interesa Javascript?")

datosPersona.nombre = nameUser;
datosPersona.edad = parseInt(anioActual - yearBorn);
datosPersona.ciudad = city;
datosPersona.interesPorJs = (interestJs) ? "Si" : "No"

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
  interest.textContent = datosPersona.interesPorJs;

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