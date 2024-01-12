let isSideNavOpen = false;

function openNav() {
  document.getElementById("mySideNav").style.width = "400px";
  document.getElementById("mySideNav").style.paddingTop = "60px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  isSideNavOpen = true;
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
  document.body.style.backgroundColor = "white";
  isSideNavOpen = false;
}