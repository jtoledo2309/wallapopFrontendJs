import { sparrestApi } from "../SparrestApi.js";

export const loginApiUser = async (username, password) => {
  const body = {
    username: username,
    password: password,
  };

  const data = await sparrestApi.post(sparrestApi.endpoints.login, body);

  return data.accesToken;
};
