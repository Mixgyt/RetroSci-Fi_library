const alertaButton = document.getElementById('alertaButton');
const alertaButton1 = document.getElementById('alertaButton-1');
const alertaButton2 = document.getElementById('alertaButton-2');
const alertaButton3 = document.getElementById('alertaButton-3');


alertaButton.addEventListener('click', () => {
        Alertas.crearAlerta({
            tipo: 'success',
            titulo: '¡Éxito!',
            mensaje: 'La operación se realizó correctamente.',
        
        });
});

alertaButton1.addEventListener('click', () => {
    Alertas.crearAlerta({
        tipo: 'warning',
        titulo: '¡Advertencia!',
        mensaje: 'La operación se realizó correctamente.',
    
    });
});
alertaButton2.addEventListener('click', () => {
    Alertas.crearAlerta({
        tipo: 'error',
        titulo: '¡Error!',
        mensaje: 'La operación se realizó correctamente.',
    
    });
});
alertaButton3.addEventListener('click', () => {
    Alertas.crearAlerta({
        tipo: 'success',
        titulo: '¡good!',
        mensaje: 'No desaparece hasta hacer click',
        autoDesaparecer: false,

        alert_neon: false, //true predeterminado
        bg: "bg-secondary-neon",
        text_color: "text-warning-neon",
        borde: "border-warning",
    });
});
