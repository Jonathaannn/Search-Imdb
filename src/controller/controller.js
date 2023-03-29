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

module.exports = { home }