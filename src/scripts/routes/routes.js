import NowPlaying from '../views/now-playing';
import Upcoming from '../views/upcoming';
import Details from '../views/details';

const routes = {
  '/': NowPlaying,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/details/:id': Details,
};

export default routes;
