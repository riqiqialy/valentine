let counter = 0;
let images = [
"1gif.gif",
 "capoofirst.gif",
 "2gif.gif",
  "capoo1.gif",
  "capoo2.gif",
  "3gif.gif",
  "1giphy.gif",
  "2giphy.gif",
  "3giphy.gif",
  "4giphy.gif",
  // Add more images if needed
];

let maxWidth = window.innerWidth * 0.6;
let maxHeight = window.innerHeight * 0.4;

let noButton = document.getElementById("no");
let maxX = 300; // Maximum X position
let maxY = 300; // Maximum Y position

noButton.addEventListener("click", function() {
  let x = Math.floor(Math.random() * maxX);
  let y = Math.floor(Math.random() * maxY);
  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
});
let yesButton = document.getElementById("yes");
let video = document.getElementById("video");
let link = document.getElementById("link");
let imagesDiv = document.getElementById("images");

noButton.addEventListener("click", function () {
var button = document.getElementById("no");
button.addEventListener("click", function() {
  button.style.left = Math.floor(Math.random() * window.innerWidth * 0.4) + "px";
  button.style.top = Math.floor(Math.random() * window.innerHeight * 0.4) + "px";
});

  counter++;
  if (counter <= images.length) {
    let newImg = document.createElement("img");
    newImg.src = images[counter - 1];
    newImg.style.position = "absolute";
    newImg.style.left = Math.random() * (maxWidth - newImg.width) + "px";
    newImg.style.top = Math.random() * (maxHeight - newImg.height) + "px";
    imagesDiv.appendChild(newImg);
  }
});

yesButton.addEventListener("click", function () {
noButton.style.display = "none";
yesButton.style.display = "none";
document.getElementById("yes").addEventListener("click", function() {
  document.getElementById("video").style.display = "block";
  document.getElementById("link").style.display = "block";
});
  video.style.display = "block";
  video.style.width = maxWidth + "px";
  video.style.height = maxHeight + "px";
  video.style.left = (window.innerWidth - maxWidth) / 2 + "px";
  video.style.top = (window.innerHeight - maxHeight) / 2 + "px";
  link.style.display = "block";
  imagesDiv.innerHTML = "";
});