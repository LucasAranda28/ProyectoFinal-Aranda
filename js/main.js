const form =document.getElementById('formularioCompras');
const resumenCompra =document.getElementById('resumenCompra');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la pagina


    // con esto tomo los valores ingresados en los campos, asignando dicho valor, a cada una de las constantes declaradas.
    const nombre =document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const pais = document.getElementById('pais').value;
    const articulo = document.getElementById('articulo').value;
    const cantidad = document.getElementById('Cantidad').value;

    if (nombre === ''){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingresa datos en todos los campos',
        });
        return;
    }

    //Mensaje a modo resumen de  lo ingresado
    let resumen = `Hola, ${nombre}. Cuando empaquetemos tu compra (${articulo}), te avisaremos a ${email}`;
    resumenCompra.textContent = resumen;

    //localstorage: guardo los datos ingresados por el usuario

    localStorage.setItem('nombre',nombre);
    localStorage.setItem('email',email);
    localStorage.setItem('pais',pais);
    localStorage.setItem('articulo',articulo);
    localStorage.setItem('Cantidad',cantidad);


    const nombreGuardado =localStorage.getItem('nombre');
    if(nombreGuardado){
        document.getElementById('nombre').value =nombreGuardado
    }
    const emailGuardado =localStorage.getItem('email');
    if(emailGuardado){
        document.getElementById('email').value =emailGuardado
    }
    const paisGuardado =localStorage.getItem('pais');
    if(paisGuardado){
        document.getElementById('pais').value =paisGuardado
    }
    const articuloGuardado =localStorage.getItem('articulo');
    if(articuloGuardado){
        document.getElementById('articulo').value =articuloGuardado
    }
    const cantidadGuardado =localStorage.getItem('Cantidad');
    if(cantidadGuardado){
        document.getElementById('Cantidad').value =cantidadGuardado
    }
})

