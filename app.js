const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

/*
fetch('url')
.then(Resolve)
.then(Reject) OR .catch(Reject)

OR directly 

fetch('url').then(ResolveFuntion, RejectFuntion)

*/
fetch(URL)
  .then((response) => response.json().then((photos) => onPhotosReady(photos)))
  .catch((err) => console.error(err));

const app = document.querySelector("#app");

const onPhotosReady = (photos) => {
  // HINT
  // if i===4-1 ? create a row  else create a column
  // i===8-1 ? create a row else create a column
  // i===12-1 ? create a row else create a column
  for (let i = 0; i < photos.length; i++) {
    const element = photos[i];
    console.log("What is this", element);

    const { url } = photos[i];
    setTimeout(() => addEachImage(url), 300 * i);
  }
};

const addEachImage = (url) => {
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
