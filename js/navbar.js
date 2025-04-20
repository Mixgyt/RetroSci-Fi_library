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
    toggleButton.addEventListener("click", () => {
      if (slideMenu.classList.contains("open")) {
        slideMenu.classList.remove("open");
        slideMenu.classList.add("closed");
      } else {
        slideMenu.classList.remove("closed");
        slideMenu.classList.add("open");
      }
      
      // Cambiar el aria-label dinámicamente
      const isOpen = slideMenu.classList.contains("open");
      toggleButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
      });
 
}