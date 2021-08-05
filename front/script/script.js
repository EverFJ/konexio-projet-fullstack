$(function () {
    let countries = [];
    const list = $("#countries");
    let listContent = "";
    const getAllCountries = () => {
        console.log("getAllCountry function loaded")

        fetch("http://localhost:8000/all")
            .then(response => response.json())
            .then(data => {
                // console.log("fetch works")
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

            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

            const result = capitalizeFirstLetter(countryName);
            // console.log(result);
            $.ajax({
                url: 'http://localhost:8000/' + result,
                success: function (data, statuts, response) {
                    let country = JSON.parse(data)[0];
                    listContent = `<li class="list-group-item bg-light text-center">name : ${country.name}</li>
                    <li class="list-group-item bg-light text-center">capital : ${country.capital}</li>
                    <li class="list-group-item bg-light text-center">region : ${country.region}</li>
                    `;
                    // for (let i = 0; i < country.length; i++) {
                    //     listContent += `<li class="list-group-item bg-light">${country[i]}</li>`
                    // }
                    list.html(listContent)
                }
            });
        })
})
