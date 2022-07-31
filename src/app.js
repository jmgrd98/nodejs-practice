const express = require("express");
const axios = require('axios');
const app = express();

//app.route("/").get((req, res) => {
    //axios.get('https://api.github.com/users/jmgrd98')
    //.then(result => res.send(result.data))
   // .catch(error => console.error(error))
//} )

app.use(express.json());

app.route("/").post((req, res) => console.log(req.body));



app.listen(3000, () => console.log('Olá joao'));
