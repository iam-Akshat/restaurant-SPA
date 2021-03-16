const loadAbout = () => {
  const root = document.getElementById('content');

  const mapContainer = document.createElement('div');
  const mapMarkup = `
    <div class="mapouter">
    <div class="gmap_canvas">
    <iframe width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
    </iframe>
    <a href="https://embedgooglemap.net/maps/7">
    </a><br>
    <style>.mapouter{position:relative;text-align:right;height:500px;width:500px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:500px;}</style></div></div>
    `;
  mapContainer.innerHTML = mapMarkup;
  mapContainer.style.border = '3px solid white';

  const text = '<h1>About us here we are</h1>';

  const wrapper = document.createElement('div');
  wrapper.innerHTML = text;
  wrapper.appendChild(mapContainer);

  const about = document.createElement('div');
  about.classList.add('about');

  about.appendChild(wrapper);

  root.appendChild(about);
};

export { loadAbout };
export default loadAbout;