const express = require("express");
const app = express();

app.get("/", (req, res) => {
    axios.get('https://api.github.com/users/jmgrd98')
} )

app.listen(3000, () => console.log('Olá joao'));
