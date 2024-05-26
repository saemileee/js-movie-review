import Button from "./components/Button";
import { getPopularMovies } from "./api";
import {
  renderComponent,
  renderContainers,
  renderMovieList,
} from "./renderers";

const app = async () => {
  let currentMovieListPage = 1;

  const { results: movies } = await getPopularMovies({
    page: currentMovieListPage,
  });

  const viewMoreClickHandler = async () => {
    const { results: movies, page } = await getPopularMovies({
      page: currentMovieListPage + 1,
    });

    renderMovieList(movies, movieListContainer);
    currentMovieListPage = page;
  };

  const viewMoreButton = Button({
    name: "더보기",
    onClickHandler: viewMoreClickHandler,
    className: "view-more",
  });

  const { movieListContainer, viewMoreButtonContainer } = renderContainers();
  renderMovieList(movies, movieListContainer);
  renderComponent(viewMoreButton, viewMoreButtonContainer);
};

export default app;
