//En este fracmento creamos el contenedor para las alertas, con el las alertas tiene el espacio para aparecer
document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("alert-container")) {
    const alertContainer = document.createElement("div");
    alertContainer.className = "alert-container";
    alertContainer.id = "alert-container";
    document.body.appendChild(alertContainer);
  }
});

//los iconos para alertas
const iconosAlerta = {
  success: "img/success.png",
  danger: "img/danger.png",
  warning: "img/warning.png",
  info: "img/info.png",
};

//Aqui creamos la funcion para q el usuario ingrese el mensaje de la alerta y el tipo de alerta
function mostrarAlerta({
  id = null,
  mensaje = "",
  tipo = "primary",
  tiempo = 5000,
}) {
  const container = document.getElementById("alert-container");

  if (!container) return;

  const alerta = document.createElement("div");
  const uniqueId = id || `alert-${Date.now()}`;
  alerta.className = `alert-${tipo}`;
  alerta.id = uniqueId;

  //vamos a colocarle el icono si tiene el tipo de alerta
  let icono = "";

  if (iconosAlerta[tipo]) {
    icono = `<img src="${iconosAlerta[tipo]}" alt="${tipo}" class="alert-icon">`;
  } else {
    if(tipo == "alert"){
      icono = `<img src="img/alerta_white.png" alt="${tipo}" class="alert-icon">`;
    }else{
      icono = `<img src="img/alerta.png" alt="${tipo}" class="alert-icon">`;
    }
  }

  alerta.innerHTML = `
    ${icono}
    <span>${mensaje}</span>
    <button class="btn btn-danger" onclick="cerrarAlerta('${uniqueId}')">X</button>
  `;

  container.appendChild(alerta);

  if (tiempo > 0) {
    setTimeout(() => {
      cerrarAlerta(uniqueId);
    }, tiempo);
  }
}


function cerrarAlerta(id) {
  const alerta = document.getElementById(id);
  if (alerta) {
    alerta.remove();
  }
}

//funcion hamburguesa para los navbar
function toggleMenu(navbarId) {
  const navbar = document.getElementById(navbarId);
  const nav = navbar.querySelector(".navbar-nav");
  nav.classList.toggle("active");
}
