export default class ApiClient {
  #baseUrl;
  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

  async get(path, params) {
    const param = new URLSearchParams(params);
    const response = await fetch(`${this.#baseUrl}${path}?${param}`);
    return response.json();
  }
}
