const menuIcon = document.querySelector(".header-menu-icon");
const menu = document.querySelector('.header-menu');

const active = "active";

menuIcon.addEventListener('click', (e) => {
    menu.classList.toggle(active);
   if(menu.matches(".active")){
        menuIcon.style.color = "#fff";
    }else{
         menuIcon.style.color = "#333";
   }
});
