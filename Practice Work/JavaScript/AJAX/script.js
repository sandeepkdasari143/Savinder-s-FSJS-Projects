const btn = document.getElementById('btn')


btn.addEventListener('click', () => {
    const card = document.getElementsByClassName('card')[0];
    let search = document.getElementById('searchInput')
    setTimeout(()=>{
        card.innerHTML = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
       setTimeout(()=>{
        if (search.value) {
            search = search.value.toLowerCase()
            const request = new XMLHttpRequest();
            request.open('GET', `https://restcountries.com/v3.1/name/${search}`)
            request.send();
            request.addEventListener('load', function () {
                const [data] = JSON.parse(this.responseText);
    
                const capitals = data.capital.join(', ')
                const continents = data.continents.join(', ')
                console.log(data)
                let currency = "";
                for (let x in data.currencies) {
                    currency = data.currencies[x].name;
                }
    
                let currencySymbol = data.currencies
                for (let x in data.currencies) {
                    currencySymbol = data.currencies[x].symbol;
                }
    
                let languages = "";
                for (let x in data.languages) {
                    languages += data.languages[x] + ", ";
    
                    console.log(languages)
                }
                languages = languages.slice(0, -2)
                card.innerHTML = `        <img src="${data.flags.png}"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name.official}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> <strong> Capital : ${capitals} </strong> </li>
            <li class="list-group-item"> <strong> Continent : ${continents} </strong> </li>
            <li class="list-group-item"><strong> Languages : ${languages} </strong></li>
            <li class="list-group-item"><strong> Currency : ${currency} '${currencySymbol}'  </strong></li>
            <li class="list-group-item"><strong> Area : ${(data.area / 1000000).toFixed(1) + " million sq.km "} </strong></li>
            <li class="list-group-item"><strong> Population : ${(data.population / 1000000).toFixed(1) + "M"} </strong></li>
        </ul>`
                card.style.opacity = "1"
            })
        }
       },5000)

    },1000)
   
    console.log('dfjkfjkjk')

})

/*
showCountry()
function showCountry(country = "india") {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
    request.send();
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        const card = document.getElementsByClassName('card')[0];
        const capitals = data.capital.join(', ')
        const continents = data.continents.join(', ')
        console.log(data)
        let currency = "";
        for (let x in data.currencies) {
            currency = data.currencies[x].name;
        }

        let currencySymbol = data.currencies
        for (let x in data.currencies) {
            currencySymbol = data.currencies[x].symbol;
        }

        let languages = "";
        for (let x in data.languages) {
            languages += data.languages[x] + ", ";

            console.log(languages)
        }
        languages = languages.slice(0, -2)
        card.innerHTML = `        <img src="${data.flags.png}"
    class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${data.name.official}</h5>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item"> <strong> Capital : ${capitals} </strong> </li>
    <li class="list-group-item"> <strong> Continent : ${continents} </strong> </li>
    <li class="list-group-item"><strong> Languages : ${languages} </strong></li>
    <li class="list-group-item"><strong> Currency : ${currency} '${currencySymbol}'  </strong></li>
    <li class="list-group-item"><strong> Area : ${(data.area / 1000000).toFixed(1) + " million sq.km "} </strong></li>
    <li class="list-group-item"><strong> Population : ${(data.population / 1000000).toFixed(1) + "M"} </strong></li>
</ul>`
        card.style.opacity = "1"
    })
}*/