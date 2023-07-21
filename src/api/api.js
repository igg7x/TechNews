const { VITE_API_URL: url, VITE_API_KEY: key } = import.meta.env;

export const getLatestNews = async (language = "en", page = "") => {
  const results = await fetch(
    `${url}apiKey=${key}&language=${language}&page=${page}`
  );
  return await results.json();
};

export const getNewsByTech = async (language = "en", page = "") => {
  const results = await fetch(
    `${url}apiKey=${key}&language=${language}&q=tech&page=${page}`
  );
  return await results.json();
};

export const getNewsByPolitics = async (language = "en", page = "") => {
  const results = await fetch(
    `${url}apiKey=${key}&language=${language}&q=politics&page=${page}`
  );
  return await results.json();
};
