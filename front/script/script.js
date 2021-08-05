$(function() {
    let countries = [];
    const list = $("#countries");
    let listContent = "";
    const getAllCountries = () => {
        console.log("getAllCountry function loaded")

        fetch("http://localhost:8000/all")
            .then(response => response.json())
            .then(data => {
                console.log("fetch works")
                countries = data;
                for (let i = 0; i < countries.length; i++) {
                    listContent += `<li>${countries[i]}</li>`
                }
                list.html(listContent)
            })
    }
    getAllCountries()
})