var navbarShown = false;
var isPageTop = true;

window.onscroll = function () { pageScrolled() };

function pageScrolled() {

  if(document.documentElement.scrollTop > 0)
  {
    document.getElementById("top").style.backgroundColor = "rgba(0, 0, 0, .95)";
    document.getElementById("top").style.height = "55px";
    document.getElementById("top").style.paddingTop = "0px";
    document.getElementById("active-page").childNodes[0].style.display = "none";

  }
  else if(isPageTop){
    document.getElementById("top").style.backgroundColor = "transparent";
    document.getElementById("top").style.height = "115px";
    document.getElementById("active-page").childNodes[0].style.display = "block";
    document.getElementById("top").style.paddingTop = "30px";

  }

}

function toggleNavbar() {

  var navbar = document.getElementById("navbar");

  if (navbarShown) {
    navbar.style.maxHeight = "0px";
  }
  else {
    navbar.style.maxHeight = "250px";
  }
  navbarShown = !navbarShown;
}



