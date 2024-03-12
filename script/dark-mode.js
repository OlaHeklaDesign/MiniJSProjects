var icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    icon.src = "/assets/dark mode/sun.png";
  } else {
    icon.src = "/assets/dark mode/moon.png";
  }
}
