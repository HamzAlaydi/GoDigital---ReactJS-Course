import {GIANTBOMB_API_KEY} from "../config";

export const getAll = (limit) => {
    // const url = `https://www.giantbomb.com/api/games/?api_key=${GIANTBOMB_API_KEY}&format=json&limit=${limit}`;
    const url = 'https://swapi.dev/api/films';
    return fetch(url);
}