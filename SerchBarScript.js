window.addEventListener("message", function (event) {
  let backgroundDarkColor = "var( --dark-mode-bg_default)";
  let backgroundLightColor = "var( --light-mode-bg_default)";
  let ElementClassNameToChangeColor = ["search-bar", "selector-serch-bar"];

  let vlLines = document.getElementsByClassName("div-vl-dividing");

  let hrLines = document.getElementsByClassName("div-hr-dividing")[0];

  if (
    !localStorage.getItem("colorMood") ||
    localStorage.getItem("colorMood") === "light"
  ) {
    for (let i = 0; i < ElementClassNameToChangeColor.length; i++) {
      element = document.getElementsByClassName(
        ElementClassNameToChangeColor[i]
      );
      for (let j = 0; j < element.length; j++) {
        element[j].style.backgroundColor = backgroundLightColor;
      }
    }
    for (let li = 0; li < vlLines.length; li++) {
      vlLines[li].style.borderLeftColor = "var(--light-mode-lines-color)";
    }
    hrLines.style.borderLeftColor = "var(--light-mode-lines-color)";
  } else {
    this.document.getElementsByClassName(
      "div-search-inputs"
    )[0].style.boxShadow = "none";

    for (let i = 0; i < ElementClassNameToChangeColor.length; i++) {
      element = document.getElementsByClassName(
        ElementClassNameToChangeColor[i]
      );
      for (let j = 0; j < element.length; j++) {
        element[j].style.backgroundColor = backgroundDarkColor;
      }
    }

    for (let li = 0; li < vlLines.length; li++) {
      vlLines[li].style.borderLeftColor = "var(--dark-mode-lines-color)";
    }
    hrLines.style.borderLeftColor = "var(--dark-mode-lines-color)";
  }
});
