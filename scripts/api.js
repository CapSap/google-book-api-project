export const makeFetchRequest = async (userInputFromForm) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${userInputFromForm}`
  );

  const data = await response.json();
  return data;
};
