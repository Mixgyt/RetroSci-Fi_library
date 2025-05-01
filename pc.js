let canalActual = 0;
const sistema = document.querySelector(".sistema");
const programas = document.querySelectorAll(".programa");

let player;
let reproductores = {}; 

const controlVolumen = document.getElementById("volumen");

controlVolumen.addEventListener("input", (e) => {
  const volumen = parseInt(e.target.value);
  
  for (const id in reproductores) {
    reproductores[id].setVolume(volumen);
  }
});

function onYouTubeIframeAPIReady() {
    const iframes = document.querySelectorAll("iframe[id^='canal-']");
  
    iframes.forEach((iframe) => {
      const id = iframe.id;
      const canalNum = parseInt(id.split('-')[1]);
  
      reproductores[id] = new YT.Player(id, {
        events: {
          onReady: (event) => {
            event.target.setVolume(0); // Volumen base
  
            if (canalActual === canalNum) {
              event.target.unMute();
              event.target.playVideo();
            } else {
              event.target.mute();
            }
          }
        }
      });
    });
  }
  

  function mostrarCanal(index) {
    sistema.classList.add("canal-transition");
  
    setTimeout(() => {
      programas.forEach((prog, i) => {
        prog.style.display = i === index ? "block" : "none";
      });
  
      // Silenciar todos y activar solo el canal actual
      for (const id in reproductores) {
        const canalNum = parseInt(id.split('-')[1]);
        const player = reproductores[id];
  
        if (canalNum === index) {
          player.unMute();
          player.setVolume(parseInt(controlVolumen.value)); // volumen actual
          player.playVideo();
        } else {
          player.mute();
        }
      }
    }, 300);
  
    setTimeout(() => {
      sistema.classList.remove("canal-transition");
    }, 600);
  }
  


function cambiarCanal(direccion) {
    canalActual = (canalActual + direccion + programas.length) % programas.length;
    mostrarCanal(canalActual);
}

let ultimaDireccion = 0;

window.addEventListener("wheel", (e) => {
    const direccion = e.deltaY > 0 ? 1 : -1;

    if (direccion !== ultimaDireccion) {
        cambiarCanal(direccion);
        ultimaDireccion = direccion;

        // hay q hacer un tiempo para q no cambie los canales de un solo con el scroll
        setTimeout(() => ultimaDireccion = 0, 1000);
    }
});

//Cargar el primer canal
mostrarCanal(canalActual);

function copiarCodigo() {
  const code = document.getElementById("code-to-copy").textContent;
  navigator.clipboard.writeText(code)
}

function copiarCodigoCdn() {
  const codecdn1 = document.getElementById("code-to-copy-cdn1").textContent;
  const codecdn2 = document.getElementById("code-to-copy-cdn2").textContent;
  let cadena = codecdn1 +"\n"+ codecdn2;
  navigator.clipboard.writeText(cadena)
}