import loadHome from './pages/home';
import bgImg from './assets/restua-bg.jpg';

import './stylesheets/styles.css';
import navigate from './utils/navigate';

const root = document.getElementById('content');
root.style.background = `url(${bgImg})`;
root.style.height = '100vh';
loadHome();


const links = document.querySelectorAll('li a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    navigate(e.target);
  });
});
