function loadContent() {
  var container = document.getElementById("iframe-fav-container");

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

function changeToLight(
  ElementClassNameToChangeColor,
  textClassNameToChangeColor,
  backgroundLightColor,
  textLightColor,
  bodyLightColor,
  vlLines,
  hrLines
) {
  document
    .getElementsByClassName("sectionPageContent")[0]
    .style.setProperty("background-color", bodyLightColor, "important");

  for (let i = 0; i < ElementClassNameToChangeColor.length; i++) {
    element = document.getElementsByClassName(ElementClassNameToChangeColor[i]);
    for (let j = 0; j < element.length; j++) {
      element[j].style.backgroundColor = backgroundLightColor;
    }
  }

  for (let t = 0; t < textClassNameToChangeColor.length; t++) {
    textClassNameToChangeColor[t].style.setProperty(
      "color",
      textLightColor,
      "important"
    );
  }

  document.getElementById("search-input-text").placeholder.color =
    textLightColor;

  for (let li = 0; li < vlLines.length; li++) {
    vlLines[li].style.borderLeftColor = "var(--light-mode-lines-color)";
  }
  hrLines.style.borderLeftColor = "var(--light-mode-lines-color)";
}

function changeToDark(
  ElementClassNameToChangeColor,
  textClassNameToChangeColor,
  backgroundDarkColor,
  textDarkColor,
  bodyDarkColor,
  vlLines,
  hrLines
) {
  document
    .getElementsByClassName("sectionPageContent")[0]
    .style.setProperty("background-color", bodyDarkColor, "important");

  for (let i = 0; i < ElementClassNameToChangeColor.length; i++) {
    element = document.getElementsByClassName(ElementClassNameToChangeColor[i]);
    for (let j = 0; j < element.length; j++) {
      element[j].style.backgroundColor = backgroundDarkColor;
    }
  }

  for (let t = 0; t < textClassNameToChangeColor.length; t++) {
    textClassNameToChangeColor[t].style.setProperty(
      "color",
      textDarkColor,
      "important"
    );
  }

  document.getElementById("search-input-text").placeholder.color =
    textDarkColor;

  for (let li = 0; li < vlLines.length; li++) {
    vlLines[li].style.borderLeftColor = "var(--dark-mode-lines-color)";
  }
  hrLines.style.borderLeftColor = "var(--dark-mode-lines-color)";
}

ChangeColorMood = function ChangeColorMood(type) {
  let backgroundDarkColor = "var( --dark-mode-bg_default)";
  let backgroundLightColor = "var( --light-mode-bg_default)";
  let textLightColor = "var( --light-mode-body-text) ";
  let textDarkColor = "var(--dark-mode-body-text) ";
  let bodyLightColor = "var(--light-mode-bg_body)";
  let bodyDarkColor = "var(--dark-mode-bg_body)";
  let ElementClassNameToChangeColor = [
    "website-main-header",
    "section-welcome",
    "header-href",
    "iframe-main-header",
    "div-single-topic",
    "div-info-single-topic",
    "search-bar",

    "selector-serch-bar",

    "fav-section",
    "div-fav-topic",
  ];

  let textClassNameToChangeColor = document.getElementsByClassName(
    "text-color-mood-change"
  );
  let vlLines = document.getElementsByClassName("div-vl-dividing");

  let hrLines = document.getElementsByClassName("div-hr-dividing")[0];
  let headerHrefBorder = document.getElementsByClassName("header-href");

  if (
    !localStorage.getItem("colorMood") ||
    localStorage.getItem("colorMood") === "light"
  ) {
    if (type === "button") {
      document.getElementsByClassName("div-search-inputs")[0].style.boxShadow =
        "none";

      favDivElement = document.getElementsByClassName("div-fav-topic");

      for (let d = 0; d < favDivElement.length; d++) {
        favDivElement[d].style.boxShadow = "none";
      }

      for (let k = 0; k < headerHrefBorder.length; k++) {
        headerHrefBorder[k].style.borderColor = "var( --dark-mode-lines-color)";
      }
      changeToDark(
        ElementClassNameToChangeColor,
        textClassNameToChangeColor,
        backgroundDarkColor,
        textDarkColor,
        bodyDarkColor,
        vlLines,
        hrLines
      );
      localStorage.setItem("colorMood", "Dark");
    } else if (type === "check") {
      document.getElementsByClassName("div-search-inputs")[0].style.boxShadow =
        "0px 0px 5px 1px var(--light-mode-lines-color)";

      favDivElement = document.getElementsByClassName("div-fav-topic");
      for (let d = 0; d < favDivElement.length; d++) {
        favDivElement[d].style.boxShadow =
          "0px 0px 3px 2px var(--light-mode-lines-color)";
      }

      for (let k = 0; k < headerHrefBorder.length; k++) {
        headerHrefBorder[k].style.borderColor = "var(--light-mode-lines-color)";
      }

      changeToLight(
        ElementClassNameToChangeColor,
        textClassNameToChangeColor,
        backgroundLightColor,
        textLightColor,
        bodyLightColor,
        vlLines,
        hrLines
      );
    }
  } else {
    if (type === "button") {
      localStorage.setItem("colorMood", "light");

      document.getElementsByClassName("div-search-inputs")[0].style.boxShadow =
        "0px 0px 5px 1px var(--light-mode-lines-color)";

      favDivElement = document.getElementsByClassName("div-fav-topic");
      for (let d = 0; d < favDivElement.length; d++) {
        favDivElement[d].style.boxShadow =
          "0px 0px 3px 2px var(--light-mode-lines-color)";
      }

      for (let k = 0; k < headerHrefBorder.length; k++) {
        headerHrefBorder[k].style.borderColor = "var(--light-mode-lines-color)";
      }
      changeToLight(
        ElementClassNameToChangeColor,
        textClassNameToChangeColor,
        backgroundLightColor,
        textLightColor,
        bodyLightColor,
        vlLines,
        hrLines
      );
    } else if (type === "check") {
      document.getElementsByClassName("div-search-inputs")[0].style.boxShadow =
        "none";

      favDivElement = document.getElementsByClassName("div-fav-topic");
      for (let d = 0; d < favDivElement.length; d++) {
        favDivElement[d].style.boxShadow = "none";
      }
      document.getElementsByClassName("div-search-inputs")[0].style.boxShadow =
        "none";

      for (let k = 0; k < headerHrefBorder.length; k++) {
        headerHrefBorder[k].style.borderColor = "var( --dark-mode-lines-color)";
      }
      changeToDark(
        ElementClassNameToChangeColor,
        textClassNameToChangeColor,
        backgroundDarkColor,
        textDarkColor,
        bodyDarkColor,
        vlLines,
        hrLines
      );
    }
  }
};

ChangeColorMood("check");
