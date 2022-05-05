const container = document.querySelector("#page-container");

/*

// maybe this function should take in the object and generate all of the html/nodes?
// so function should look like const fun = (object) {
  create all of the html here

 }
 */
const createHTML = (element, text, attr) => {
  const returnElement = document.createElement(element);
  text = document.createTextNode(text);
  returnElement.appendChild(text);

  for (let key in attr) {
    returnElement[key] = attr[key];
  }
  return returnElement;
};

const createCard = (object) => {
  const cardContainer = createHTML("div", "", { className: "card" });
  const cardContainer__imgTitle = createHTML("div", "", {
    className: "card__imgTitle",
  });

  //imgTitle = container for image, title and author. top half of card
  cardContainer__imgTitle.append(
    createHTML("img", undefined, {
      src: object.volumeInfo.imageLinks.thumbnail,
    })
  );
  cardContainer__imgTitle.append(
    createHTML("p", object.volumeInfo.title, { className: "card__title" })
  );
  cardContainer__imgTitle.append(
    createHTML("p", object.volumeInfo.authors, { className: "card__authors" })
  );
  cardContainer.append(cardContainer__imgTitle);

  cardContainer.append(
    createHTML("p", object.volumeInfo.description, {
      className: "card__description",
    })
  );

  return cardContainer;
};

export const insertDataIntoDom = (array) => {
  array.map((x) => container.append(createCard(x)));
};

//what should the cards look like?
//Each book in the grid should have an
// image, author, title and description

// REUSABLE FUNCTION TO CREATE ALL OF THESE ELEMENTS!

//..functions that take in functions or return functions?
//  what does this mean again?
