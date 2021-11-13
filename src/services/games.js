import { MY_API_GAMES_ENDPOINT } from "../config";

export const getAll = async (params = {}) => {
  try {
    const urlParams = Object.entries(params).map(([key, value]) => {
      return `${key}=${value}`;
    });

    let url = MY_API_GAMES_ENDPOINT;
    if (urlParams.length > 0) {
      url = `${url}?${urlParams.join("&")}`;
    }

    const response = await fetch(url);
    const json = await response.json();

    return json.games;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const create = async data => {
  try {
    let url = MY_API_GAMES_ENDPOINT;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const json = await response.json();

    return json.games;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateById = async ({ id, ...data }) => {
  try {
    let url = `${MY_API_GAMES_ENDPOINT}/${id}`;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const json = await response.json();

    return json.game;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteById = async id => {
  try {
    let url = `${MY_API_GAMES_ENDPOINT}/${id}`;

    const response = await fetch(url, {
      method: "DELETE"
    });
    const json = await response.json();

    return json.status;
  } catch (error) {
    return Promise.reject(error);
  }
};
