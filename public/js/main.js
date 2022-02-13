
$(document).ready(function() { 
    $("#bars").click(function() { 
    $("#sideBar").toggle(); 
    }); 
    }); 

var navbar = document.getElementById('navbar');
var menu = document.getElementById('menu');

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop && window.matchMedia("(min-width: 640px)").matches){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
}



// i tried using my own code to hide and show the sidebar, but I'm faced with a little issue.


// var sideBar = document.getElementById('sideBar');
// var bars = document.getElementById('bars');
// var close = document.getElementById('close');
// var x = document.getElementById('x');



// bars.addEventListener('click', ()=>{
//     sideBar.style.display = "block";
//     bars.style.display = "none";
//     x.style.display = "block";
    
// })
// x.addEventListener('click', ()=>{
//         sideBar.style.display = "none";
//         bars.style.display = "block";
//         x.style.display = "none";  
// })

// window.addEventListener("resize", function() {
//     if (window.matchMedia("(min-width: 640px)").matches) {
//         bars.style.display = "none";
      
        
//     } else {
//         bars.style.display = "block";
     
//     }
    
//   })



var netflix = document.getElementById('netflix');
var google = document.getElementById('google');
var spotify = document.getElementById('spotify');
var twitter = document.getElementById('twitter');
var instagram = document.getElementById('instagram');
var facebook = document.getElementById('facebook');

var popUp = document.getElementById('pop-up');
var popUpTwo = document.getElementById('pop-up2');
var popUpThree = document.getElementById('pop-up3');
var popUpFour = document.getElementById('pop-up4');
var popUpFive = document.getElementById('pop-up5');
var popUpSix = document.getElementById('pop-up6');

var close = document.getElementById('close');
var modal = document.getElementById('modal');

netflix.addEventListener('click', ()=>{
    popUp.style.display = 'block';
    modal.style.display = 'block';
 })

google.addEventListener('click', ()=>{
    popUpTwo.style.display = 'block';
    modal.style.display = 'block';
})
twitter.addEventListener('click', ()=>{
    popUpThree.style.display = 'block';
    modal.style.display = 'block';
})
facebook.addEventListener('click', ()=>{
    popUpFour.style.display = 'block';
    modal.style.display = 'block';
})
instagram.addEventListener('click', ()=>{
    popUpFive.style.display = 'block';
    modal.style.display = 'block';
})
spotify.addEventListener('click', ()=>{
    popUpSix.style.display = 'block';
    modal.style.display = 'block';
})

close.addEventListener('click', ()=>{
    popUp.style.display = 'none';
    popUpTwo.style.display = 'none';
    popUpThree.style.display = 'none';
    popUpFour.style.display = 'none';
    popUpFive.style.display = 'none';
    popUpSix.style.display = 'none';
    modal.style.display = 'none';
    
})

modal.addEventListener('click', ()=>{
    popUp.style.display = 'none';
    popUpTwo.style.display = 'none';
    popUpThree.style.display = 'none';
    popUpFour.style.display = 'none';
    popUpFive.style.display = 'none';
    popUpSix.style.display = 'none';
    modal.style.display = 'none';
    
})





