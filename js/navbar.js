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