const express = require("express");
const cors = require("cors");
const app = express();
const countries = require("./variables")

const port = 8000;

app.get("/all", cors(), (req, res) => {
    let countriesArray = [];
    for (let i = 0; i < countries.length; i++) {
        countriesArray.push(countries[i].name)
    }
    res.send(countriesArray)
    // res.send("test")
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})