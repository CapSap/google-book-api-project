import { makeFetchRequest } from "./api.js";
import { insertDataIntoDom } from "./dom2.js";

const formElement = document.querySelector("#bookSearchForm");

formElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  const myFormData = new FormData(formElement);
  const userInput = myFormData.get("userInput");

  const data = await makeFetchRequest(userInput);
  document.querySelectorAll(".card").forEach((e) => e.remove());

  insertDataIntoDom(data.items);
});
