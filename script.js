const images = new Image();
   
   


let newImage = new Image();

  <button onclick="JavaScript:alert('I intend to live forever. So far, so good. Steven Wright.')">Submit</button>
    

  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




        
// Script to set active state in navbar
$(document).ready(function(){
  var url = window.location.pathname;
  var activePage = url.substring(url.lastIndexOf('/') + 1);
  $('.navbar-nav li a').each(function(){
    var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1);
    if (activePage == linkPage) {
      $(this).addClass('active');
    }
  });
});




     