const MovieItem = ({ thumbnailUrl, title, rate }) => {
  const movieItemEl = document.createElement("li");
  movieItemEl.classList.add("movie-item");

  const thumbnailEl = document.createElement("img");
  thumbnailEl.src = thumbnailUrl;
  thumbnailEl.alt = title;
  thumbnailEl.classList.add("movie-thumbnail");

  const titleEl = document.createElement("h2");
  titleEl.textContent = title;
  titleEl.classList.add("movie-title");

  const rateEl = document.createElement("p");
  rateEl.textContent = rate;
  rateEl.classList.add("movie-rate");

  movieItemEl.appendChild(thumbnailEl);
  movieItemEl.appendChild(titleEl);
  movieItemEl.appendChild(rateEl);

  return movieItemEl;
};

export default MovieItem;
