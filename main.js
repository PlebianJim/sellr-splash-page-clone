//Open and close the sideNav bar when the "request a callback" button is pressed
function openNav() {
  document.getElementById("mySideNav").style.width = "400px";
  document.getElementById("mySideNav").style.paddingTop = "60px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

//Creates a sticky Nav for the top nav bar

//When the user scrolls the page, execute the stickyFunction
window.onscroll = function () {
  stickyFunction();
};

//Get the header element
let header = document.getElementById("sticky-header-id");

//Get the offset position of the nav bar
let sticky = header.offsetTop;

//Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
