import { makeFetchRequest } from "./scripts/api.js";
import { insertDataIntoDom } from "./scripts/dom2.js";

const formElement = document.querySelector("#bookSearchForm");

formElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  const myFormData = new FormData(formElement);
  const userInput = myFormData.get("userInput");

  const data = await makeFetchRequest(userInput);
  document.querySelectorAll(".card").forEach((e) => e.remove());

  insertDataIntoDom(data.items);
});
