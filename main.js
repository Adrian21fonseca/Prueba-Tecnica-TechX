// Obtener elementos del DOM
const inputBusqueda = document.getElementById('busqueda-producto');
const selectOrdenar = document.getElementById('ordenar-productos');
const productosContainer1 = document.querySelector('.productos-1');
const productosContainer2 = document.querySelector('.productos-2');

// Obtener todos los productos iniciales
let todosLosProductos = [
  ...productosContainer1.querySelectorAll('.producto-card'),
  ...productosContainer2.querySelectorAll('.producto-card')
];

// Función para renderizar productos filtrados y ordenados
function renderizarProductos(productos) {
  // Limpiar contenedores
  productosContainer1.innerHTML = '';
  productosContainer2.innerHTML = '';

  // Dividir los productos entre los dos contenedores
  productos.forEach((producto, index) => {
    if (index < 3) {
      productosContainer1.appendChild(producto);
    } else {
      productosContainer2.appendChild(producto);
    }
  });
}

// Función para aplicar filtro y orden juntos
function aplicarFiltroYOrden() {
  const texto = inputBusqueda.value.toLowerCase();
  const orden = selectOrdenar.value;

  // Filtrar por nombre
  let filtrados = todosLosProductos.filter(prod => {
    const nombre = prod.querySelector('.nombre-producto').textContent.toLowerCase();
    return nombre.startsWith(texto);
  });

  // Ordenar
  filtrados.sort((a, b) => {
    const nombreA = a.querySelector('.nombre-producto').textContent.toLowerCase();
    const nombreB = b.querySelector('.nombre-producto').textContent.toLowerCase();

    if (orden === 'asc') {
      return nombreA.localeCompare(nombreB);
    } else if (orden === 'desc') {
      return nombreB.localeCompare(nombreA);
    } else {
      return 0; // sin orden
    }
  });

  renderizarProductos(filtrados);
}

// Escuchadores de eventos
inputBusqueda.addEventListener('input', aplicarFiltroYOrden);
selectOrdenar.addEventListener('change', aplicarFiltroYOrden);
