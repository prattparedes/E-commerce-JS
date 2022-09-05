function openMenu() {
    document.body.classList += " menu--open"  /* agregar un espacio antes de poner el nombre de una clase es good practice*/
}

function closeMenu() {
    document.body.classList.remove('menu--open')

}