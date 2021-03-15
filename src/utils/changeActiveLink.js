const changeActiveLink = (newLink) => {
    document.querySelector('.active').classList.toggle('active')
    newLink.classList.toggle('active')
}
export { changeActiveLink }