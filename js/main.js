const form =document.getElementById('formularioCompras');
const resumenCompra =document.getElementById('resumenCompra');

fetch('listaProductos.json')
    .then(response => response.json())
    .then(productos => {
        generarOpcionesProductos(productos);
    });

function generarOpcionesProductos(productos) {
    const articuloInput = document.getElementById('articulo');
    productos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.nombre;
        option.textContent = producto.nombre;
        articuloInput.appendChild(option);
    });
}

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

    fetch('listaProductos.json')
    .then(response => response.json())
    .then(productos => {
        const productoSeleccionado = productos.find(producto => producto.nombre === articulo);
        const total = productoSeleccionado.precio * cantidad;

        let resumen = `
            <h2>Resumen de la compra</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>País:</strong> ${pais}</p>
            <p><strong>Artículo:</strong> ${articulo}</p>
            <p><strong>Cantidad:</strong> ${cantidad}</p>
            <p><strong>Total:</strong> $${total}</p>
        `;
        resumenCompra.innerHTML = resumen;
    });

    //localstorage: guardo los datos ingresados por el usuario

    localStorage.setItem('nombre',nombre);
    localStorage.setItem('email',email);
    localStorage.setItem('pais',pais);
    localStorage.setItem('articulo',articulo);
    localStorage.setItem('Cantidad',cantidad);

    document.getElementById('nombre').value = localStorage.getItem('nombre') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('pais').value = localStorage.getItem('pais') || '';
    document.getElementById('articulo').value = localStorage.getItem('articulo') || '';
    document.getElementById('Cantidad').value = localStorage.getItem('Cantidad') || '';

})

