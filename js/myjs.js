const boton = document.querySelector('.botonnav ');
const botonicono = document.querySelector('.botonnav i ');
const menu = document.querySelector('.barra');
const buscar = document.querySelector(".botonbuscar");
const buscaricono = document.querySelector(".botonbuscar i");
const buscador = document.querySelector(".buscar");

boton.onclick = function (){
    menu.classList.toggle('open');
    const openyes = menu.classList.contains("open");

    botonicono.classList = openyes
    ? "fa-solid fa-bars fa-xl"
    : "fa-solid fa-bars fa-xl"
}
buscar.onclick = function (){
    buscador.classList.toggle("open");
    const openbuscar = buscador.classList.contains("open");

    buscaricono.classList = openbuscar
    ? "fa-solid fa-magnifying-glass fa-xl"
    : "fa-solid fa-magnifying-glass fa-xl"

}
