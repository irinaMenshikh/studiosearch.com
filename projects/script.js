function openBurgerMenu() {
    document.querySelector('.burger-menu').addEventListener('click', function (e) {
         
            if (this.classList.contains('burger-menu_active')) {
                addAnimate(false); 
                this.classList.remove('burger-menu_active');
            } else {
                this.classList.add('burger-menu_active');
                addAnimate(true); 
            }          
    })
   
}
openBurgerMenu();

function addAnimate(click) {
let links = document.querySelectorAll('.burger-menu_link');

for(i = 0; i < links.length; i++){
    if(click === true) {
        links[i].classList.add('animate__animated', 'animate__lightSpeedInRight','animate__delay-0.9s');
    }else {
        links[i].classList.remove('animate__animated', 'animate__lightSpeedInRight','animate__delay-0.9s');
    }
  
    }

}