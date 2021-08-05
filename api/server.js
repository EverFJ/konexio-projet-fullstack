const express = require("express");
const cors = require("cors");
const app = express();
const countries = require("./variables")

const port = 8000;

app.use(cors());

app.get("/all", (req, res) => {
    let countriesArray = [];
    for (let i = 0; i < countries.length; i++) {
        countriesArray.push(countries[i].name)
    }
    res.send(countriesArray)
})

app.get("/:country", (req, res) => {
    let country = req.params.country;
    let result = countries.filter(element => element.name.toLowerCase() == country.toLowerCase());
    // console.log(result);
    res.json(result)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})