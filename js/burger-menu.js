const burgerMenu = document.querySelector('.header-burger');
if (burgerMenu) {
    const menuBody = document.querySelector('.header-nav');
    const headerLocation = document.querySelector('.header-location');
    burgerMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        burgerMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        headerLocation.classList.toggle('active')
    });
}