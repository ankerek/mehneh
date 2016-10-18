export const api = {
  fetch(url, params) {

    return fetch(url, params).then(response => response.json());
  }
}