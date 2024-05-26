import MovieItem from "../components/MovieItem";

export const renderComponent = (component, container) => {
  container.appendChild(component);
  return component;
};

export const renderContainers = () => {
  const root = document.getElementById("root");

  const movieListContainer = document.createElement("ul");
  movieListContainer.classList.add("movie-list-container");
  root.appendChild(movieListContainer);

  const viewMoreButtonContainer = document.createElement("div");
  viewMoreButtonContainer.classList.add("view-more-button-container");
  renderComponent(viewMoreButtonContainer, root);

  return { movieListContainer, viewMoreButtonContainer };
};

const MOVIE_THUMBNAIL_BASE_URL =
  "https://media.themoviedb.org/t/p/w220_and_h330_face";

export const renderMovieList = (movies, container) => {
  movies.forEach((movie) => {
    const movieItemEl = MovieItem({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      rate: movie.vote_average.toFixed(1),
      thumbnailUrl: `${MOVIE_THUMBNAIL_BASE_URL}${movie.poster_path}`,
    });
    renderComponent(movieItemEl, container);
  });
};
