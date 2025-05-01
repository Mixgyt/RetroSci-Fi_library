//funcion hamburguesa para los navbar
export function toggleMenu(navbarId = ".navbar"){

  const btn_navbar = document.querySelector('.navbar-toggle');

  if (btn_navbar) {
    btn_navbar.addEventListener('click', function() {

      const navbar = document.querySelector(navbarId);
      if (navbar) {
        const nav = navbar.querySelector(".navbar-nav");
        if (nav) {
          if (nav.classList.contains("active")) {
            nav.classList.remove("active");
            nav.classList.add("inactive");
          } else {
            nav.classList.remove("inactive");
            nav.classList.add("active");
          }
        }
      }
    });
  }
}

export function closeMenu() {
  const toggleButton = document.querySelector(".slide-menu__toggle");
  const slideMenu = document.querySelector(".slide-menu");

  if (toggleButton && slideMenu) {
    const iconOpen = toggleButton.querySelector(".icon-open");
    const iconClosed = toggleButton.querySelector(".icon-closed");
    let arrowDiv;

    arrowDiv = document.createElement("div");
    if (slideMenu.classList.contains("closed")) {
      if (toggleButton.classList.contains("icon-black")) {
        arrowDiv.classList.add("img-der-arrow-black");
      } else {
        arrowDiv.classList.add("img-der-arrow-white");
      }
    } else {
      if (toggleButton.classList.contains("icon-black")) {
        arrowDiv.classList.add("img-izq-arrow-black");
      } else {
        arrowDiv.classList.add("img-izq-arrow-white");
      }
    }
    toggleButton.appendChild(arrowDiv);

    toggleButton.addEventListener("click", () => {
      const isOpen = slideMenu.classList.contains("open");

      if (isOpen) {
        slideMenu.classList.remove("open");
        slideMenu.classList.add("closed");

        arrowDiv.classList.remove("img-izq-arrow-white", "img-izq-arrow-black");

        if (toggleButton.classList.contains("icon-black")) {
          arrowDiv.classList.add("img-der-arrow-black");
        } else {
          arrowDiv.classList.add("img-der-arrow-white");
        }
      } else {
        slideMenu.classList.remove("closed");
        slideMenu.classList.add("open");

        arrowDiv.classList.remove("img-der-arrow-white", "img-der-arrow-black");

        if (toggleButton.classList.contains("icon-black")) {
          arrowDiv.classList.add("img-izq-arrow-black");
        } else {
          arrowDiv.classList.add("img-izq-arrow-white");
        }
      }


      if (iconOpen && iconClosed) {
        iconOpen.style.display = isOpen ? "none" : "block";
        iconClosed.style.display = isOpen ? "block" : "none";
      }

      toggleButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });
    
    }
}

export function asidebar(breakpoint = 950) {
  const slideMenu = document.querySelector(".slide-menu");

  if (slideMenu) {
    const resizeObserver = new ResizeObserver(() => {
      if (window.innerWidth <= breakpoint) {
        if (!slideMenu.classList.contains("closed")) {
          slideMenu.classList.remove("open");
          slideMenu.classList.add("closed");
          const toggleButton = document.querySelector(".slide-menu__toggle");
          if (toggleButton) {
            const arrowDiv = toggleButton.querySelector("div");
            if (arrowDiv) {
              arrowDiv.classList.remove("img-izq-arrow-white", "img-izq-arrow-black");
              if (toggleButton.classList.contains("icon-black")) {
                arrowDiv.classList.add("img-der-arrow-black");
              } else {
                arrowDiv.classList.add("img-der-arrow-white");
              }
            }
          }



          const menuItems = slideMenu.querySelectorAll(".slide-menu__item a");
          menuItems.forEach((item) => {
            item.addEventListener("click", () => {

              if (window.innerWidth <= breakpoint) {
              slideMenu.classList.remove("open");
              slideMenu.classList.add("closed");
              const toggleButton = document.querySelector(".slide-menu__toggle");
              if (toggleButton) {
                const arrowDiv = toggleButton.querySelector("div");
                if (arrowDiv) {
                  arrowDiv.classList.remove("img-izq-arrow-white", "img-izq-arrow-black");
                  if (toggleButton.classList.contains("icon-black")) {
                    arrowDiv.classList.add("img-der-arrow-black");
                  } else {
                    arrowDiv.classList.add("img-der-arrow-white");
                  }
                }
              }
            }});
          });
        }
      }
      if (window.innerWidth > breakpoint){
        if (slideMenu.classList.contains("closed")) {
          slideMenu.classList.remove("closed");
          slideMenu.classList.add("open");
          const toggleButton = document.querySelector(".slide-menu__toggle");
          if (toggleButton) {
            const arrowDiv = toggleButton.querySelector("div");
            if (arrowDiv) {
              arrowDiv.classList.remove("img-der-arrow-white", "img-der-arrow-black");
              if (toggleButton.classList.contains("icon-black")) {
                arrowDiv.classList.add("img-izq-arrow-black");
              } else {
                arrowDiv.classList.add("img-izq-arrow-white");
              }
            }
          }
        }
      }
    });

    resizeObserver.observe(document.body);
  }
}