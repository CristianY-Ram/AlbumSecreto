function moverNav() {
    var menu = document.getElementById("Menu");
    if (menu.classList.contains("abrir")) {
        menu.classList.remove("abrir");
    } else {
        menu.classList.add("abrir");
    }
}