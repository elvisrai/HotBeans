//click effect of bar to X
const menu = document.querySelector ('#mobile-menu');
const menuLinks = document.querySelector ('.navbar__menu');

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener ('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle ('active');
});

var acc = document.getElementsByClassName ("quests");
var i;

for (i = 0; i < acc.length; i++){
    acc[i].addEventListener ("click", function(){
        this.classList.toggle ("active");
        this.parentElement.classList.toggle("active");

        var panel= this.nextElementSibling;
        if (panel.style.display=== "block"){
            panel.style.display = "none";
        }
        else {
            panel.style.display =  "block";
        }
    });
}