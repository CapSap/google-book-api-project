const container = document.querySelector("#page-container");

console.log(container);
/*

// maybe this function should take in the object and generate all of the html/nodes?
// so function should look like const fun = (object) {
  create all of the html here

 }
 */
const createHTML = (element, text) => {
  const returnElement = document.createElement(element);
  text = document.createTextNode(text);
  returnElement.appendChild(text);

  return returnElement;
};
const createCard = (object) => {
  // creating image element
  const imgEl = document.createElement("img");
  const imgLink = object.volumeInfo.imageLinks.thumbnail;
  imgEl.src = imgLink;

  const cardContainer = createHTML("div", "");
  const cardContainer__imgTitle = createHTML("div", "");
  cardContainer__imgTitle.append(imgEl);

  cardContainer__imgTitle.append(createHTML("p", object.volumeInfo.title));
  cardContainer__imgTitle.append(createHTML("p", object.volumeInfo.authors));
  cardContainer__imgTitle.className = "card__imgTitle";
  cardContainer.append(cardContainer__imgTitle);

  cardContainer.append(createHTML("p", object.volumeInfo.description));
  cardContainer.className = "card";

  return cardContainer;
};

export const insertDataIntoDom = (array) => {
  // array.map((x) => container.append(createHTML("p", x.volumeInfo.title)));

  array.map((x) => container.append(createCard(x)));
};

//what should the cards look like?
//Each book in the grid should have an
// image, author, title and description

// REUSABLE FUNCTION TO CREATE ALL OF THESE ELEMENTS!

//..functions that take in functions or return functions?
//  what does this mean again?
