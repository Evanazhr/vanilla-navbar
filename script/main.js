


// nav icon
const navbar = document.querySelector("nav");
const navIcon = document.querySelector(".nav-icon");
const menuIcon = document.querySelector(".bx-menu"); 
const navActions = document.querySelector(".nav-actions");
const navMenu = document.querySelector(".nav-menu");

navIcon.addEventListener("click", () => {
    navMenu.classList.toggle("nav-expand");
    navActions.classList.toggle("nav-expand");

    if(navMenu.classList.contains("nav-expand")){
        menuIcon.classList.replace("bx-menu", "bx-x");
    }else{
        menuIcon.classList.replace("bx-x", "bx-menu");
    }
});

document.addEventListener("click", (e) => {
    if(!navMenu.contains(e.target) && !navIcon.contains(e.target) && !navActions.contains(e.target) && !navbar.contains(e.target)){
        navMenu.classList.remove("nav-expand");
        navActions.classList.remove("nav-expand");
        menuIcon.classList.replace("bx-x", "bx-menu");
    }
})