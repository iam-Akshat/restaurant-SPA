const loadHome = () => {
    const root = document.getElementById('content')
    const home =  document.createElement('div')
    home.classList.add('home')
    const homeWrapper = document.createElement('div')
    home.appendChild(homeWrapper)
    homeWrapper.innerHTML = `<h1>Serving the best burgers in town</h1>
    <p>"Best burger I ever had"-<em>Donald Trump</em></p>`

    root.appendChild(home)
}

export { loadHome }