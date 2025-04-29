//funcion hamburguesa para los navbar
export function toggleMenu(navbarId) {
  const navbar = document.getElementById(navbarId);
  const nav = navbar.querySelector(".navbar-nav");

  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    nav.classList.add("inactive");
  } else {
    nav.classList.remove("inactive");
    nav.classList.add("active");
  }
}

export function closeMenu() {

  const toggleButton = document.querySelector(".slide-menu__toggle");
  const slideMenu = document.querySelector(".slide-menu");
  const iconOpen = toggleButton.querySelector(".icon-open");
  const iconClosed = toggleButton.querySelector(".icon-closed");
  let arrowDiv; 

  if (toggleButton) {
    arrowDiv = document.createElement("div");
    if (slideMenu.classList.contains("closed")) 
    {
        if (toggleButton.classList.contains("icon-black")) {
          arrowDiv.classList.add("img-der-arrow-black");
        }else
        {
          arrowDiv.classList.add("img-der-arrow-white");
        }
    }
    else{
        if (toggleButton.classList.contains("icon-black")) {
          arrowDiv.classList.add("img-izq-arrow-black");
        }else
        {
          arrowDiv.classList.add("img-izq-arrow-white");
        }
    }
    toggleButton.appendChild(arrowDiv);
  }

  toggleButton.addEventListener("click", () => {
    
    const isOpen = slideMenu.classList.contains("open");

    if (slideMenu.classList.contains("open")) {
      slideMenu.classList.remove("open");
      slideMenu.classList.add("closed");

      arrowDiv.classList.remove("img-izq-arrow-white");
      arrowDiv.classList.remove("img-izq-arrow-black");

      if (toggleButton.classList.contains("icon-black")) {
        arrowDiv.classList.add("img-der-arrow-black");
      }else
      {
        arrowDiv.classList.add("img-der-arrow-white");
      }
     
    } else {
      slideMenu.classList.remove("closed");
      slideMenu.classList.add("open");

      arrowDiv.classList.remove("img-der-arrow-white");
      arrowDiv.classList.remove("img-der-arrow-black");

      if (toggleButton.classList.contains("icon-black")) {
        arrowDiv.classList.add("img-izq-arrow-black");
      }else
      {
        arrowDiv.classList.add("img-izq-arrow-white");
      }
      
    }

    // Cambia iconos manualmente
    iconOpen.style.display = isOpen ? "none" : "block";
    iconClosed.style.display = isOpen ? "block" : "none";

    // Cambiar el aria-label dinamicamente
    toggleButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

}