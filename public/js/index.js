search = () => {
    let title = document.getElementById("titleMovie").value
    if(!title) {
       return window.alert("Campo vázio!")
    }
    window.location.href = `/search/${title}`
}

info = (imdbID) => {
    window.location.href = `/info/${imdbID}`
}

backHome = () => {
    window.location.href = '/'
}

back = () => {
    window.history.back()
}

backToTop = () => {
    addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
}
