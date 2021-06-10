document.addEventListener('DOMContentLoaded', function () {

    const randomiser = document.getElementById('randomColorButton');
    const postsToRandomise = document.getElementsByClassName('listedPosts');
    randomiser.addEventListener('click', function () {
        for (let i = 0; i < postsToRandomise.length; i++) {
            postsToRandomise[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        }
    })


    const nav = document.getElementById("nav");
    document.onkeydown = function(keyPress) {
        if (keyPress.keyCode == 27) {
            nav.className = "header";
        }
    };

    const burgerMenu = document.getElementsByClassName("burgerMenuContainer");
    console.log(burgerMenu);
    burgerMenu[0].addEventListener("click", function (x) {
        myFunction(this);
    
    })

    const myFunction = function(x) {
        x.classList.toggle("change");
        if (nav.className === "header") {
            nav.className = 'displayHeader';
        } else if (nav.className === "displayHeader") {
            nav.className = "header";
        }
      }
    

});