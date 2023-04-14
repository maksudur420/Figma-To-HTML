const menu = document.querySelector("nav");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>60){
        menu.classList.add("scrolled");
    }else{
        menu.classList.remove("scrolled");
    }
});