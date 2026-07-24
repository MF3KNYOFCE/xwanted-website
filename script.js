// Fade in animation

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// Back To Top Button

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(!topBtn) return;

if(document.body.scrollTop>300||document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}