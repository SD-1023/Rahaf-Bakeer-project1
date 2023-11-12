


let favData = [
  {
    imgSrc: "./assets/imges/react.webp",
    title: "React",
    rating: "4",
  },
  {
    imgSrc: "./assets/imges/cloud.jpeg",
    title: "Web Development Concepts and T...",
    rating: "4",
  },
];

let divFav = document.getElementById("dev-fav-content-display-flex");

for (let i = 0; i < favData.length; i++) {
  let newTopicElement = document.createElement("div");
  newTopicElement.className = "div-fav-topic";
  let topicImg = document.createElement("img");
  topicImg.className = "img-fav";
  let infoContainer = document.createElement("div");
  infoContainer.className = "div-fav-topic-info";
  let topicTitle = document.createElement("h5");
  topicTitle.className = "fav-topic-name text-color-mood-change";

  let topicRatingContainer = document.createElement("div");
  topicRatingContainer.className = "div-fav-rating-single-topic";

  topicImg.src = favData[i]["imgSrc"];
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


window.addEventListener("message", function (event) {
  
});
