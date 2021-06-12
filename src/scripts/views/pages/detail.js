import TheMovieDbSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';
import { createMovieDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
    <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movies = await TheMovieDbSource.detailMovies(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movies);
  },
};

export default Detail;
