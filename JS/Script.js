const nav=document.querySelector(".nav-menu-content");
const icon=document.querySelector(".nav-menu-img");
const search=document.querySelector(".search-tab");
const searc = document.querySelector(".fas.fa-search");
icon.addEventListener("click",togle);
searc.addEventListener("click",sear);
function togle(){
    nav.classList.toggle("active");
    icon.classList.toggle("active");
}
function sear(){
    search.classList.toggle("active");
    searc.classList.toggle("active");
}
