import axios from "axios";

// console.log('Hallo daar!');
//Ophalen van de data:
// 1. Het request zelf (endpoint voor naam)
// GET 'https://restcountries.com/v2/all?fields=name,region,flags,population'
// 2. Asynchrone functie (async/await)
// 3. Een try and catch maken.
// 4. Maak een variabele die als waarde het resultaat van de endpoint krijgt (await axios.get)
// 5. Maak een container/anker in je html
// 6. Haal deze binnen in je javascript file
// 7. Maak een nieuw element waar je alle data in wilt opslaan
// 8. Zet de data die je nodig hebt in dit element.
// 9. Append dit element aan je container/anker

async function getCountries() {

    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log(result.data);
        // console.log(result.data[99]);

        result.data.sort((a, b) => {
            return a.population - b.population;
        })

        allCountries(result.data);


    } catch (e) {
        console.error(e);
    }
}

getCountries();

function allCountries(countries) {

    const unorderedCountries = document.getElementById('country-List');

    countries.map((country) => {
        const countryList = document.createElement('li');
        countryList.innerHTML = `
                    <img src="${country.flag}" alt="flag" class="flag">
                    <h3 class=${country.region}>${country.name}</h3>
                    <p>Has a population of ${country.population} people</p>
        `;

        unorderedCountries.appendChild(countryList)
    })
}