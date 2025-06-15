const abrir_menu = document.querySelector ("#open-menu")
const cerrar_menu = document.querySelector ("#close-menu")
const navegador = document.querySelector ("#navegador")

abrir_menu.addEventListener("click" , () => {
    navegador.classList.add("visible")
})

cerrar_menu.addEventListener("click" , () => {
    navegador.classList.remove("visible")
})





const inputBusqueda = document.getElementById('busqueda-producto');

inputBusqueda.addEventListener('input', function () {
    const valor = inputBusqueda.value.toLowerCase();

// Seleccionamos todos los productos de ambas secciones
    const productos = document.querySelectorAll('.producto-card');

productos.forEach(producto => {
    const nombre = producto.querySelector('.nombre-producto')?.textContent.toLowerCase();
    
    if (nombre && nombre.startsWith(valor)) {
        producto.style.display = 'block';
    } else {
        producto.style.display = 'none';
    }
    });
});
