$(function () {
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
                    listContent += `<li class="list-group-item bg-light">${countries[i]}</li>`
                }
                list.html(listContent)
            })
    }
    getAllCountries()
    $("#btnShowData").click(
        function () {
            const countryName = $("#inputCountry").val();
            $.ajax({
                url: 'http://localhost:8000/' + countryName,
                success: function (data, statuts, response) {
                    let country = data;
                    for (let i = 0; i < country.length; i++) {
                        listContent += `<li class="list-group-item bg-light">${country[i]}</li>`
                    }
                    list.html(data)
                }
            });
        })
})