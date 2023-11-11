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
