import { handleResponse, handleError } from "./apiUtils";
import config from "../config.json";

const baseUrl = config.api.prodUrl + "/product";

export function getProduct() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getProductWithFilter(product) {
  debugger;
  let url = baseUrl + "?";
  url = getURLWithQueryString(url, product);
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getProductById(productId) {
  return fetch(baseUrl + "/" + productId)
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  debugger;
  let url = baseUrl;
  let method = "POST";
  return fetch(url, {
    method: method, // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...product,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function updateProduct(product) {
  let url = baseUrl + "/" + product.id;
  url = getURLWithQueryString(url, product);
  let method = "PUT";
  return fetch(url, {
    method: method, // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteProductById(productId) {
  let url = baseUrl + "/" + productId;
  return fetch(url, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

function getURLWithQueryString(url, product) {
  let newURL = url;
  if (product.serialNumber)
    if (newURL.charAt(newURL.length - 1) === "?")
      newURL = newURL + "serialNumber=" + product.serialNumber;
    else newURL = newURL + "?serialNumber=" + product.serialNumber;
  if (product.brand) newURL = newURL + "&brand=" + product.brand;
  if (product.model) newURL = newURL + "&model=" + product.model;
  if (product.status) newURL = newURL + "&status=" + product.status;
  if (product.purchaseDate)
    newURL = newURL + "&purchaseDate=" + product.purchaseDate;
  return newURL;
}
