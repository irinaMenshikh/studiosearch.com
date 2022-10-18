function openBurgerMenu() {
    document.querySelector('.burger-menu').addEventListener('click', function (e) {

        if (this.classList.contains('burger-menu_active')) {
            this.classList.remove('burger-menu_active');
        } else {
            this.classList.add('burger-menu_active');
        }
    })
}
openBurgerMenu();