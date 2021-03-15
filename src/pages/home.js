import bgImg from "../assets/restua-bg.jpg" 
const loadHome = () => {
    const root = document.getElementById('content')
    const home =  document.createElement('div')
    home.classList.add('home')
    home.style.background = `url(${bgImg})`
    home.style.height = "100vh"
    const homeWrapper = document.createElement('div')
    home.appendChild(homeWrapper)
    homeWrapper.innerHTML = `<h1>Serving the best burgers in town</h1>
    <p>"Best burger I ever had"-<em>Donald Trump</em></p>`

    root.appendChild(home)
}

export { loadHome }