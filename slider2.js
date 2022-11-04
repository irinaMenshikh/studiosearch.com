
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


    let sliderImage = document.querySelectorAll('.slider-img');
    let k = 0;

    function mySlider() {
        if(k < sliderImage.length) {
        let img = sliderImage[k];
        img.style.display = 'block';
        img.classList.add('animate__animated', 'animate__fadeIn');
        img.style.setProperty('--animate-duration', '2s');
       
        let width = document.querySelector('.slider-line').offsetWidth;
            if (width < 540) {
                img.setAttribute("src", "./pictures/mainPageSmall/" + k + ".jpg");
            }
            if (width > 540 && width < 860) {
                img.setAttribute("src", "./pictures/mainPageMiddle/" + k + ".jpg");
            }
    
        k++;
        }else {
            startNewSlider();
        }
    }
    
    function startNewSlider() {
        sliderImage.forEach((element) => {
            element.classList.remove('animate__animated', 'animate__fadeIn');
            element.style.display = 'none';
        })
        k = 0;
        mySlider();
    }
    mySlider();
    setInterval(mySlider, 6000);
    