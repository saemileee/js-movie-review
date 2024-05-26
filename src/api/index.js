import { MOVIE_BASE_URL } from "../constant/api";
import apiClient from "./ApiClient";

const movieApiClient = new apiClient(MOVIE_BASE_URL);
const movieApiKey = process.env.API_KEY;

export const getPopularMovies = async ({ language = "ko-KR", page }) => {
  const params = {
    api_key: movieApiKey,
    language,
    page,
  };

  return movieApiClient.get("/popular", params);
};
