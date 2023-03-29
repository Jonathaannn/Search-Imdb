search = () => {
    let title = document.getElementById("titleMovie").value
    if(!title) {
       return window.alert("Campo vázio!")
    }
    window.location.href = `/schImdb/search/${title}`
}

info = (imdbID) => {
    window.location.href = `/schImdb/info/${imdbID}`
}

backHome = () => {
    window.location.href = '/schImdb/'
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