const abrir_menu = document.querySelector ("#open-menu")
const cerrar_menu = document.querySelector ("#close-menu")
const navegador = document.querySelector ("#navegador")

abrir_menu.addEventListener("click" , () => {
    navegador.classList.add("visible")
})

cerrar_menu.addEventListener("click" , () => {
    navegador.classList.remove("visible")
})