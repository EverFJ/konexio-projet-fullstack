const express = require("express");
const app = express();
const countries = require("./variables")

const port = 8000;

app.get("/all", (req, res) => {
    let countriesArray = [];
    for (let i = 0; i < countries.length; i++) {
        countriesArray.push(countries[i].name)
    }
    res.send(countriesArray)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})