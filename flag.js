const getFlags = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://restcountries.com/v3.1/all');
    xhr.send();
    xhr.responseType = 'json';
    xhr.onload = ()=> {
        let data = xhr.response;
        console.log(data);
    
        let countryFlags = data.filter((country)=> country.
        flags && country.flags.png)
        .map((country)=> country.flags.png);
        console.log(countryFlags);

        
        let totalpopulation = data.filter((papulationss) =>papulationss.population);
        let over = totalpopulation.map((all) => all.population)
        const subtotal = over.reduce((sum,curr) => sum + curr, 0);
        console.log(subtotal);

        
        let dollar = data.filter((use) =>use.currencies);
          let usedollar = dollar.map((usdollar) => usdollar.name.common);
        console.log(usedollar);
    }
    
}

getFlags();




