$(function() {
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
        function() {
            const countryName = $("#inputCountry").val();

            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

            const result = capitalizeFirstLetter(countryName);
            // console.log(result);
            $.ajax({
                url: 'http://localhost:8000/' + countryName,
                success: function(data, statuts, response) {
                    console.log(data[0])
                    const countryProperties = Object.entries(data[0]);
                    console.log(countryProperties);

                    // listContent = `<li class="list-group-item bg-light">name : ${data[0].name}</li>
                    // <li class="list-group-item bg-light">capital : ${data[0].capital}</li>
                    // <li class="list-group-item bg-light">region : ${data[0].region}</li>`;

                    listContent = "";
                    for (let i = 0; i < countryProperties.length; i++) {
                        listContent += `<li class="list-group-item bg-light">${countryProperties[i].join(" : ")}</li>`
                    }
                    list.html(listContent)
                }
            });
        })
})