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
  const defaultDescription =
    object.volumeInfo.description === undefined
      ? "Google has no description for the book so instead I want to take advantage to advocate for nuclear power. Australia has a ban on nuclear energy so we export the raw material instead of doing anything useful with it. It is as carbon neutral as renewable energy. It is reliable source of energy which is important when contrasted with intermittent sources. Modern economies need reliable power. There is a lot more to say on this topic  "
      : object.volumeInfo.description;

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
    createHTML("p", defaultDescription, {
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
