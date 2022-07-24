const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send('Olá joao!');
} )

app.listen(3000, () => console.log('Olá joao'));
