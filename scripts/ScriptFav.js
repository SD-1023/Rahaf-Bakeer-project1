let favData = [
  {
    imgSrc: "./assets/imges/react.webp",
    title: "React",
    rating: "4",
  },
  {
    imgSrc: "./assets/imges/cloud.jpeg",
    title: "Cloud Computing",
    rating: "4",
  },
];

let divFav = document.getElementById("fav-content-flex-container");

for (let i = 0; i < favData.length; i++) {
  let newTopicElement = document.createElement("div");
  newTopicElement.className = "div-fav-topic";
  let topicImg = document.createElement("img");
  topicImg.className = "img-fav";
  let infoContainer = document.createElement("div");
  infoContainer.className = "div-fav-topic-info";
  let topicTitle = document.createElement("h5");
  topicTitle.className =
    "fav-topic-name text-over-flow-handler text-color-mood-change";

  let topicRatingContainer = document.createElement("div");
  topicRatingContainer.className = "div-fav-rating-single-topic";

  topicImg.src = favData[i]["imgSrc"];
  topicImg.alt = "topic img";
  newTopicElement.appendChild(topicImg);

  topicTitle.appendChild(document.createTextNode(favData[i]["title"]));
  infoContainer.appendChild(topicTitle);

  for (let j = 0; j < favData[i]["rating"]; j++) {
    let starRating = document.createElement("i");
    starRating.className = "fa  fa-star";
    topicRatingContainer.appendChild(starRating);
  }

  for (let j = 0; j < 5 - favData[i]["rating"]; j++) {
    let starRating = document.createElement("i");
    starRating.className = "fa fa-star-o";
    topicRatingContainer.appendChild(starRating);
  }

  infoContainer.appendChild(topicRatingContainer);
  newTopicElement.appendChild(infoContainer);
  divFav.appendChild(newTopicElement);
}

/*

let textLightColor = "var( --light-mode-body-text) ";
  let textDarkColor = "var(--dark-mode-body-text) ";
  var textClassNameToChangeColor = document.getElementsByClassName(
    "text-color-mood-change"
  );

if (
  !localStorage.getItem("colorMood") ||
  localStorage.getItem("colorMood") === "light"
) {
  let favDivElement = document.getElementsByClassName("div-fav-topic");
  for (let d = 0; d < favDivElement.length; d++) {
    favDivElement[d].style.boxShadow =
      "0px 0px 3px 2px var(--light-mode-lines-color)";
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
} else {
  let favDivElement = document.getElementsByClassName("div-fav-topic");
  for (let d = 0; d < favDivElement.length; d++) {
    favDivElement[d].style.setProperty("box-shadow", "none", "important");
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
}
*/
