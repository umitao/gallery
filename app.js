const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

fetch(URL)
  .then((response) => response.json().then((photos) => onPhotosReady(photos)))
  .catch((err) => console.error(err));

const app = document.querySelector("#app");

const onPhotosReady = (photos) => {
  for (let i = 0; i < photos.length; i++) {
    const element = photos[i];
    const { url } = photos[i];
    //inserting photos as 4 column grid
    if (i === 0 || i % 4 === 0) {
      insertRow(url);
    } else {
      insertColumn(url);
    }
  }
};

//Creating rows
const insertRow = (url) => {
  const divRow = document.createElement("div");
  divRow.className = "row";
  const divColumn = document.createElement("div");
  divColumn.className = "column";
  const image = document.createElement("img");
  image.src = url;

  divColumn.appendChild(image);
  divRow.appendChild(divColumn);
  app.appendChild(divRow);
};

//Creating columns
const insertColumn = (url) => {
  const divColumn = document.createElement("div");
  divColumn.className = "column";
  const image = document.createElement("img");
  image.src = url;
  const row = document.querySelector("#app").lastElementChild;
  divColumn.appendChild(image);
  row.appendChild(divColumn);
};
