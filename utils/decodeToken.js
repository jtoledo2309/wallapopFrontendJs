export const decodeToken = (token) => {
  let decodedToken;

  try {
    const stringifiedToken = atob(token.split(".")[1]);
    decodedToken = JSON.parse(stringifiedToken);
  } catch (error) {
    return null;
  }

  return decodedToken;
};
