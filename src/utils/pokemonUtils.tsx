export const getPokemonId = (url: string) =>
  url.split("/")[url.split("/").length - 2];
