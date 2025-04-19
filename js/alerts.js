const Alertas = {
    crearAlerta: function({ tipo = 'info', titulo = '', mensaje = '', alert_neon = true , autoDesaparecer = true, duracion = 5000, bg = "", text_color = "", borde = "" }) {

        let contenedor = document.querySelector('.alerts-container'); //contenedor de alertas si no existe
        if (!contenedor) {
            contenedor = document.createElement('div');
            contenedor.className = 'alerts-container';
            document.body.appendChild(contenedor);
        }

    
        const alerta = document.createElement('div');
        alerta.className = `custom-alert alert-${tipo} alert-enter`;

        
        const icono = document.createElement('div');
        icono.className = `alert-icon icon-${tipo}`;
        alerta.appendChild(icono);

        
        const contenido = document.createElement('div');
        contenido.className = 'alert-content';

        const tituloElemento = document.createElement('h4');
        tituloElemento.className = 'alert-title';
        tituloElemento.textContent = titulo;
        contenido.appendChild(tituloElemento);

        const mensajeElemento = document.createElement('p');
        mensajeElemento.className = 'alert-message';
        mensajeElemento.textContent = mensaje;
        contenido.appendChild(mensajeElemento);

        alerta.appendChild(contenido); // se crea todos los elementos y luego se añaden al contenedor

        const botonCerrar = document.createElement('button');
        botonCerrar.className = 'alert-close';
        botonCerrar.innerHTML = '×';
        botonCerrar.onclick = () => {
            alerta.classList.remove('alert-enter');
            alerta.classList.add('alert-exit');
            setTimeout(() => alerta.remove(), 300);
        };
        alerta.appendChild(botonCerrar);

        if (alert_neon) {
            alerta.classList.add('alert-neon');
            icono.classList.add('alert-neon');
        }
        if (bg != "") {
            alerta.classList.add(bg);
        
        }
        if (borde != "") {
            alerta.classList.add(borde);
        }

        if (text_color != "") {
            alerta.classList.add(text_color);
            tituloElemento.classList.add(text_color);
            mensajeElemento.classList.add(text_color);
            botonCerrar.classList.add(text_color);
        }

        if (autoDesaparecer) {
        const barraProgreso = document.createElement('div');
        barraProgreso.className = 'alert-progress';
        alerta.appendChild(barraProgreso);
        }
          
        
        contenedor.appendChild(alerta);

        if (autoDesaparecer) {
            setTimeout(() => {
                if (alerta.parentElement) {
                    alerta.classList.remove('alert-enter');
                    alerta.classList.add('alert-exit');
                    setTimeout(() => alerta.remove(), 300);
                }
            }, duracion);
        }
    }
};

export default Alertas;