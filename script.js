function themeFlip() {
  var dark = document.getElementById("dark-logo");
  var light = document.getElementById("light-logo");
  var welcome = document.getElementById("welcome-container");
  var work = document.getElementById("work-container");
  var contact = document.getElementById("contact-container");
  var footer = document.getElementById("footer");
  var images = document.getElementsByClassName("work-screenshots");
  var icons = document.getElementsByClassName("link-icons");
  // SET TO DARK LOGO MODE
  if (dark.style.display === "none") {
    dark.style.display = "inherit";
    light.style.display = "none";
    welcome.style.background = "black";
    work.style.background = "white";
    work.style.color = "black";
    contact.style.background = "white";
    contact.style.color = "black";
    footer.style.background = "black";
    footer.style.color = "white";
    for(var i = 0; i < images.length; i++) {
      images[i].style.filter = "none";
    }
    for(var i = 0; i < icons.length; i++) {
      console.log(i);
      icons[i].style.filter = "none";
    }
  // SET TO LIGHT LOGO MODE
  } else {
    dark.style.display = "none";
    light.style.display = "inherit";
    welcome.style.background = "white";
    work.style.background = "black";
    work.style.color = "white";
    contact.style.background = "black";
    contact.style.color = "white";
    footer.style.background = "white";
    footer.style.color = "black";
    for(var i = 0; i < images.length; i++) {
      images[i].style.filter = "invert(100%)";
    }
    for(var i = 0; i < icons.length; i++) {
      icons[i].style.filter = "invert(100%)";
    }
  }
}
