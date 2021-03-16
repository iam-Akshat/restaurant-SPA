import changeActiveLink from './changeActiveLink';
import loadHome from '../pages/home';
import cleanUp from './cleanUp';

const navigate = (target) => {
  const { page: currentPage } = document.querySelector('.active').dataset;
  const { page: toPage } = target.dataset;

  if (currentPage === toPage) return;

  changeActiveLink(target);
  cleanUp();

  switch (toPage) {
    case 'home': (async () => {
      loadHome();
    })();
      break;

    case 'about': (async () => {
      const { /* webpackPrefetch: true */ default: loadAbout } = await import('../pages/about');
      loadAbout();
    })();
      break;

    case 'contact': (async () => {
      const { /* webpackPrefetch: true */ default: loadContact } = await import('../pages/contact');
      loadContact();
    })();
      break;

    default:
      break;
  }
};

export default navigate;