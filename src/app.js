const express = require("express");
const axios = require('axios')
const app = express();

app.route("/").get((req, res) => {
    axios.get('https://api.github.com/users/jmgrd98')
    .then(result => res.send(`<img src="${result.data.avatar_url}">np`))
    .catch(error => console.error(error))
} )

app.listen(3000, () => console.log('Olá joao'));
