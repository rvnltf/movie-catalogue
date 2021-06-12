import TheMovieDbSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `<h2>Details Page</h2>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movies = await TheMovieDbSource.detailMovies(url.id);
    console.log(movies);
  },
};

export default Detail;
