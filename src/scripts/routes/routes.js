import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';
import Details from '../views/pages/details';

const routes = {
  '/': NowPlaying,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/details/:id': Details,
};

export default routes;
