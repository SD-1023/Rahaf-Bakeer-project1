function loadContent() {
  var container = document.getElementById("fav-container");

  if (
    !localStorage.getItem("favDisplay") ||
    localStorage.getItem("favDisplay") === "none"
  ) {
    container.style.display = "block";
    localStorage.setItem("favDisplay", "block");
  } else {
    container.style.display = "none";

    localStorage.setItem("favDisplay", "none");
  }
}

function ChangeColorMood(type) {
  if (
    !localStorage.getItem("colorMood") ||
    localStorage.getItem("colorMood") === "light"
  ) {
    if (type === "button") {
      document.documentElement.setAttribute("color-mode", "dark");

      localStorage.setItem("colorMood", "Dark");
    } else if (type === "check") {
      document.documentElement.setAttribute("color-mode", "light");
    }
  } else {
    if (type === "button") {
      document.documentElement.setAttribute("color-mode", "light");
      localStorage.setItem("colorMood", "light");
    } else if (type === "check") {
      document.documentElement.setAttribute("color-mode", "dark");
    }
  }
}

ChangeColorMood("check");
