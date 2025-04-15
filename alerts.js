//En este fracmento creamos el contenedor para las alertas, con el las alertas tiene el espacio para aparecer
document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("alert-container")) {
    const alertContainer = document.createElement("div");
    alertContainer.className = "alert-container";
    alertContainer.id = "alert-container";
    document.body.appendChild(alertContainer);
  }
});

//Aqui creamos la funcion para q el usuario ingrese el mensaje de la alerta y el tipo de alerta
function mostrarAlerta({
  id = null,
  mensaje = "",
  tipo = "primary",
  //tiempo que dura la alerta
  tiempo = 5000,
}) {
  const container = document.getElementById("alert-container");

  if (!container) return;

  const alerta = document.createElement("div");
  const uniqueId = id || `alert-${Date.now()}`;
  alerta.className = `alert alert-${tipo}`;
  alerta.id = uniqueId;
  alerta.innerHTML = `
      ${mensaje}
      <button class="btn btn-danger" onclick="cerrarAlerta('${uniqueId}')">X</button>
    `;

  container.appendChild(alerta);

  //
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
