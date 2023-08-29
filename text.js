var navbarShown = false;
var activeDot = document.querySelector("#dot-left");

window.onresize = function()
{
  console.log(window.innerWidth)
}

window.onscroll = function () { 
  pageScrolled()
 };

function pageScrolled() {

  if(document.documentElement.scrollTop > 10)
  {
    document.getElementById("top").style.backgroundColor = "rgba(0, 0, 0, .95)";
    document.getElementById("active-page").childNodes[0].style.display = "none";

    // If it is medium or larger screen, then only you increase the topmenu height.
    if(window.innerWidth > 769)
    {
    document.getElementById("top").style.height = "55px";
    document.getElementById("top").style.paddingTop = "0px";
    }

  }
  else{
    document.getElementById("top").style.backgroundColor = "transparent";
    document.getElementById("active-page").childNodes[0].style.display = "block";

    // If it is medium or larger screen, then only you increase the topmenu height.
    if(window.innerWidth > 769)
    {
    document.getElementById("top").style.height = "115px";
    document.getElementById("top").style.paddingTop = "30px";
    }
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



function scrollLeftSide()
{ 
  activeDot.classList.remove("active");
  document.getElementById("slider-wrapper").scrollLeft = 0;
  activeDot = document.getElementById("dot-left");

  activeDot.classList.add("active");
}

function scrollRightSide()
{
  activeDot.classList.remove("active");
  document.getElementById("slider-wrapper").scrollLeft = 1100;
  activeDot = document.getElementById("dot-right");

  activeDot.classList.add("active");
}
