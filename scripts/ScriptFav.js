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
  let newTopicElement = document.createElement("a");
  newTopicElement.className = "fav-topic";
  let topicImg = document.createElement("img");
  topicImg.className = "background-fav";
  let infoContainer = document.createElement("div");
  infoContainer.className = "fav-topic-info";
  let topicTitle = document.createElement("h1");
  topicTitle.className =
    "fav-topic-title text-over-flow-handler text-color-mood-change";

  let topicRatingContainer = document.createElement("div");
  topicRatingContainer.className = "fav-rating-single-topic";

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
  newTopicElement.setAttribute("href", "./details.html");
  divFav.appendChild(newTopicElement);
}
