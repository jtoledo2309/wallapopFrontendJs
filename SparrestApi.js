class SparrestApi {
  baseUrl = "http://localhost:8000";
  endpoints = {
    login: "/auth/login",
    signup: "/auth/register",
    tweets: "/api/tweets",
  };
  constructor() {}

  async get(endpoint) {
    const response = fetch(`${this.baseUrl}${endpoint}`);

    if (!response.ok) {
      throw new Error("No existen resultados");
    }

    const data = await response.json();

    return data;
  }

  async post(endpoint, body) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  }
}

export const sparrestApi = new SparrestApi();
