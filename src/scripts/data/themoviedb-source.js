import API_ENPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
  static async nowPlayingMovies() {
    const response = await fetch(API_ENPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailMovies(id) {
    const response = await fetch(API_ENPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheMovieDbSource;
