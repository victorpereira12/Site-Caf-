
function menuShow() {
    let menuMobile = document.querySelector('.navbar-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu-icone').src = "./assets/icons8-cardápio-50.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.menu-icone').src = "./assets/icons8-excluir-50.png";
    }
}