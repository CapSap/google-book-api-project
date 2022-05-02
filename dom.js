const container = document.querySelector("#container");

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
  const cardContainer = createHTML("div", "");
  cardContainer.append(createHTML("p", object.volumeInfo.title));
  cardContainer.append(createHTML("p", object.volumeInfo.imageLinks.thumbnail));
  cardContainer.append(createHTML("p", object.volumeInfo.authors));
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
