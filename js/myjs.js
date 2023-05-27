const boton = document.querySelector('.botonnav ');
const botonicono = document.querySelector('.botonnav i ');
const menu = document.querySelector('.barra');

boton.onclick = function (){
    menu.classList.toggle('open');
    const openyes = menu.classList.contains("open");

    botonicono.classList = openyes;
}