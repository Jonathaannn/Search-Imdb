const axios = require("axios")

const home = async (req, res) => {
    const urls = ["http://www.omdbapi.com/?apikey=6c5b1285&t=Avengers: Endgame", "http://www.omdbapi.com/?apikey=6c5b1285&t=How to train your dragon"]
    const movies = []
    try {
        for (url of urls) {
            const response = await axios.get(url)
            movies.push(response.data)
        }
        res.render('index.ejs', {movies})
    } catch (error) {
        console.log(`Erro: ${error}`)
        res.status(500).json({Error: "Erro interno no servidor!"})
    }
}

const searchMovie = async (req, res) => {
    const title = req.params.title
    const url = `http://www.omdbapi.com/?apikey=6c5b1285&s=${title}`
    try {
        const moviesList = await axios.get(url)
        const imdbs = moviesList.data.Search
        const list = []
        const movies = []
        imdbs.forEach(element => {
            list.push(axios.get(`http://www.omdbapi.com/?apikey=6c5b1285&i=${element.imdbID}`))
        });
        const movie = await Promise.all(list)
        movie.map(element => {
            movies.push(element.data)
        })
        res.render('movies',{movies})
    } catch (error) {
        console.log(`Erro: ${error}`)
        res.status(400).json({Error: "Informação solicitada está incorreta!"})
    }
}

module.exports = { home, searchMovie }