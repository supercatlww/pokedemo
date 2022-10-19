import request from "../utils/request";
const baseURL = "https://pokeapi.co/api/v2";

function getPokemonTypeList(params) {
  return request({
    url: baseURL + "/type",
    method: "get",
    params: params,
  });
}

function getPokemonList(params) {
  return request({
    url: baseURL + "/pokemon",
    method: "get",
    params: params,
  });
}

function getPokemonItem(requestUrl) {
  return request({
    url: requestUrl,
    method: "get",
  });
}
function getPokemonListByType(requestUrl) {
  return request({
    url: requestUrl,
    method: "get",
  });
}

export {
  getPokemonTypeList,
  getPokemonList,
  getPokemonItem,
  getPokemonListByType,
};
