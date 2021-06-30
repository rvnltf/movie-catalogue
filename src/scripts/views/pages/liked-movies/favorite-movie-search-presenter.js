class FavoriteMovieSearchPresenter {
  constructor({ favoriteMovies }) {
    this._listenToSearchRequestByUser();
    this._favoriteMovies = favoriteMovies;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.querySelector('#query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchMovies(event.target.value);
    });
  }

  async _searchMovies(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundMovies;
    if (this.latestQuery.length > 0) {
      foundMovies = await this._favoriteMovies.searchMovies(this.latestQuery);
    } else {
      foundMovies = await this._favoriteMovies.getAllMovies();
    }

    if (foundMovies) {
      this._showFoundMovies(foundMovies);
    }
  }

  get latestQuery() {
    return this._latestQuery;
  }

  _showFoundMovies(movies) {
    const html = movies.reduce(
      (carry, movie) => carry.concat(`<li class="movie"><span class="movie__title">${movie.title || '-'}</span></li>`),
      '',
    );

    document.querySelector('.movies').innerHTML = html;

    document.getElementById('movie-search-container')
      .dispatchEvent(new Event('movies:searched:updated'));
  }
}

export default FavoriteMovieSearchPresenter;
