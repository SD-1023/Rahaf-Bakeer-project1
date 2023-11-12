





function loadContent() {
  if (
    !localStorage.getItem("favDisplay") ||
    localStorage.getItem("favDisplay") === "none"
  ) {
    localStorage.setItem("favDisplay", "block");
  } else {
    localStorage.setItem("favDisplay", "none");
  }

  window.parent.postMessage("favoritesStatus", "*");
}

function ChangeColorMood() {
  let backgroundDarkColor = "var( --dark-mode-bg_default)";
  let backgroundLightColor = "var( --light-mode-bg_default)";
  let ElementClassNameToChangeColor = [
    "website-main-header",
    "section-welcome",
    "header-href",
  ];

  if (
    !localStorage.getItem("colorMood") ||
    localStorage.getItem("colorMood") === "light"
  ) {
    console.log("fffffffff")
    

    for (let i = 0; i < ElementClassNameToChangeColor.length; i++) {
      element= document.getElementsByClassName(
        ElementClassNameToChangeColor[i]
      );
      for (let j=0;j<element.length;j++){
       element[j].style.backgroundColor = backgroundDarkColor;
      }
    
    }
    document.getElementsByClassName("h3-heading-welcome-text")[0].style.color="var(--dark-mode-body-text)";
    localStorage.setItem("colorMood", "Dark");
    
  // window.parent.postMessage("colorMoodChange", "*");
  } else {
    for (let i = 0; i < ElementClassNameToChangeColor.length; i++) {
      
      element= document.getElementsByClassName(
        ElementClassNameToChangeColor[i]
      );
      for (let j=0;j<element.length;j++){
       element[j].style.backgroundColor =backgroundLightColor
      }
    
    }
    document.getElementsByClassName("h3-heading-welcome-text")[0].style.color="var(--light-mode-body-text)";

    localStorage.setItem("colorMood", "light");
    
 
  }


  window.parent.postMessage("colorMoodChange", "*");



  
}
