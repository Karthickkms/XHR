const getCountries = () =>{
    console.log("Gettingg countriessss....");
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = ()=>{
       const countries = xhr.response;
       const twoLakhCountries = countries
              .filter((country)=>country.population<2_00_000)
              .map((country)=> {
                  return {name:country.name.common,population:country.population};
              });
              
        const countryNames = countries
              .filter((country)=>country.region && country.region==="Asia")
              .map((country)=>country.name.common);

            

              
                
        console.log("twoLakhCountries",twoLakhCountries);
        console.log("countryNames",countryNames);
        
        
       
    };
};
getCountries();