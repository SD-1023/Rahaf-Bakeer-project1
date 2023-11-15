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
  if (document.getElementsByClassName("sectionPageContent")[0]) {
    document
      .getElementsByClassName("sectionPageContent")[0]
      .style.setProperty("background-color", bodyLightColor, "important");
  }

  for (let i = 0; i < ElementClassNameToChangeColor.length; i++) {
    element = document.getElementsByClassName(ElementClassNameToChangeColor[i]);
    for (let j = 0; j < element.length; j++) {
      if (element[j]) {
        element[j].style.backgroundColor = backgroundLightColor;
      }
    }
  }

  for (let t = 0; t < textClassNameToChangeColor.length; t++) {
    if (textClassNameToChangeColor[t]) {
      textClassNameToChangeColor[t].style.setProperty(
        "color",
        textLightColor,
        "important"
      );
    }
  }
  if (document.getElementById("search-input-text")) {
    document.getElementById("search-input-text").placeholder.color =
      textLightColor;
  }

  for (let li = 0; li < vlLines.length; li++) {
    if (vlLines[li]) {
      vlLines[li].style.borderLeftColor = "var(--light-mode-lines-color)";
    }
  }
  if (hrLines) {
    hrLines.style.borderBottomColor = "var(--light-mode-lines-color)";
  }

  if (document.getElementsByClassName("body-details-page")[0]) {
    document.getElementsByClassName(
      "body-details-page"
    )[0].style.backgroundColor = "var( --light-mode-bg_body)";

    var taElement = document.getElementsByClassName(
      "div-row-info-elemnt-details"
    );

    for (ta = 0; ta < taElement.length; ta++) {
      taElement[ta].style.border =
        "1px solid var(--light-mode-lines-color)";
    }
    document.getElementsByClassName(
      "section-table-info-details"
    )[0].style.border = "border: 1px solid var(--light-mode-lines-color)";
  }


  if(document.getElementsByClassName("selector-serch-bar")[0]){
    var arrowSearch= document.getElementsByClassName("selector-serch-bar");
    for(let i = 0; i <arrowSearch.length; i++){
      arrowSearch[i].style.backgroundImage = "url(" +"./style/icons/arrow-down-icon.svg";
    }
  }

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
  if (document.getElementsByClassName("sectionPageContent")[0]) {
    document
      .getElementsByClassName("sectionPageContent")[0]
      .style.setProperty("background-color", bodyDarkColor, "important");
  }
  for (let i = 0; i < ElementClassNameToChangeColor.length; i++) {
    element = document.getElementsByClassName(ElementClassNameToChangeColor[i]);
    for (let j = 0; j < element.length; j++) {
      if (element[j]) {
        element[j].style.backgroundColor = backgroundDarkColor;
      }
    }
  }

  for (let t = 0; t < textClassNameToChangeColor.length; t++) {
    if (textClassNameToChangeColor[t]) {
      textClassNameToChangeColor[t].style.setProperty(
        "color",
        textDarkColor,
        "important"
      );
    }
  }
  if (document.getElementById("search-input-text")) {
    document.getElementById("search-input-text").placeholder.color =
      textDarkColor;
  }

  for (let li = 0; li < vlLines.length; li++) {
    if (vlLines[li]) {
      vlLines[li].style.borderLeftColor = "var(--dark-mode-lines-color)";
    }
  }
  if (hrLines) {
    hrLines.style.borderBottomColor = "var(--dark-mode-lines-color)";
  }

  if (document.getElementsByClassName("body-details-page")[0]) {
    document.getElementsByClassName(
      "body-details-page"
    )[0].style.backgroundColor = "var(--dark-mode-bg_body)";

    var taElement = document.getElementsByClassName(
      "div-row-info-elemnt-details"
    );
    for (ta = 0; ta < taElement.length; ta++) {
      taElement[ta].style.border =
        "1px solid var(--dark-mode-lines-color)";
    }
    document.getElementsByClassName(
      "section-table-info-details"
    )[0].style.border = "border: 1px solid var(--dark-mode-lines-color)";
  }


if(document.getElementsByClassName("selector-serch-bar")[0]){
  var arrowSearch= document.getElementsByClassName("selector-serch-bar");
  for(let i = 0; i <arrowSearch.length; i++){
    arrowSearch[i].style.backgroundImage = "url(" +"./style/icons/arrow-white-down.svg";
  }
}

}

function ChangeColorMood(type) {
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
    "section-table-info-details",
  ];

  if (document.getElementsByClassName("text-color-mood-change")) {
    var textClassNameToChangeColor = document.getElementsByClassName(
      "text-color-mood-change"
    );
  }

  if (document.getElementsByClassName("div-vl-dividing")) {
    var vlLines = document.getElementsByClassName("div-vl-dividing");
  }
  if (document.getElementsByClassName("div-hr-dividing")[0]) {
    var hrLines = document.getElementsByClassName("div-hr-dividing")[0];
  }

  if (document.getElementsByClassName("header-href")) {
    var headerHrefBorder = document.getElementsByClassName("header-href");
  }

  if (
    !localStorage.getItem("colorMood") ||
    localStorage.getItem("colorMood") === "light"
  ) {
    if (type === "button") {
      if (document.getElementsByClassName("div-search-inputs")[0]) {
        document.getElementsByClassName(
          "div-search-inputs"
        )[0].style.boxShadow = "none";
      }

      var favDivElement = document.getElementsByClassName("div-fav-topic");

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
      if (document.getElementsByClassName("div-search-inputs")[0]) {
        document.getElementsByClassName(
          "div-search-inputs"
        )[0].style.boxShadow = "0px 0px 5px 1px var(--light-mode-lines-color)";
      }
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
      if (document.getElementsByClassName("div-search-inputs")[0]) {
        document.getElementsByClassName(
          "div-search-inputs"
        )[0].style.boxShadow = "0px 0px 5px 1px var(--light-mode-lines-color)";
      }

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
      if (document.getElementsByClassName("div-search-inputs")[0]) {
        document.getElementsByClassName(
          "div-search-inputs"
        )[0].style.boxShadow = "none";
      }

      let favDivElement = document.getElementsByClassName("div-fav-topic");
      for (let d = 0; d < favDivElement.length; d++) {
        favDivElement[d].style.setProperty("box-shadow", "none", "important");
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
    }
  }
}

ChangeColorMood("check");
