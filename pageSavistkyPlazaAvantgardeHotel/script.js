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

let galleryImage = document.querySelectorAll('.gallery-img');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImage) {
    galleryImage.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getUrlImgPos = getFullImgUrl.split("/images/SAVISTKY_PLAZA_AVANTGARDE_HOTEL/small_img");
            let setNewImgUrl = getUrlImgPos[1].replace('")', '');

            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "../images/SAVISTKY_PLAZA_AVANTGARDE_HOTEL/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");
           
            newImg.onload = function() {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 40;
               
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("")
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                newNextBtn.style.cssText = "right:" + calcImgToEdge + "px;";
    
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("")
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                newPrevBtn.style.cssText = "left:" + calcImgToEdge + "px;";
            };
            


            console.log(setNewImgUrl);
        }
    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
    document.querySelector("#current-img").remove();
          
    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    
    getImgWindow.appendChild(newImg);


    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if(calcNewImg > galleryImage.length) {
            calcNewImg = 1;
        }
    }
    else if(changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImage.length;
        }
    }
    newImg.setAttribute("src", "../images/SAVISTKY_PLAZA_AVANTGARDE_HOTEL/"+ calcNewImg +".jpg");
    newImg.setAttribute("id", "current-img");
   

    getLatestOpenedImg = calcNewImg;

    newImg.onload = function() {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 40;
      
        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right:" + calcImgToEdge + "px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left:" + calcImgToEdge + "px;";
    }
}
