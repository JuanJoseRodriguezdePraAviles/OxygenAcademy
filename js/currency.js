//CHANGE CURRENCY
const select = document.querySelector('select.currency');
select.addEventListener('change', async()=>{

    let changeRatio = 1;
        
    const endpoint = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`;

    let listChangeJSON;

    let originalValueBasic = 0;
    let originalValueProfessional = 25;
    let originalValuePremium = 60;
    let unitSymbol = "$";
    changeRatio = await fetch(endpoint, {cache: 'no-cache'}).then(response => {
        if (response.ok) {
            listChangeJSON = response.json();
            return listChangeJSON;
        
        } throw new Error('Request failed!');
        
    }, networkError => {
        
        console.log(networkError.message)
        
    }).then(item => {
        console.log(select.value);
        if(select.value === 'eur'){
            unitSymbol="€";
            return 1/item.eur.usd;
        } else if(select.value === 'gbp') {
            unitSymbol="£";
            return item.eur.gbp;
        } else {
            unitSymbol="$"
            return 1;
        }
        
    });
    
    
    let newBasicPrice = Math.round(originalValueBasic * changeRatio *100)/100;
    let newProfessionalPrice = Math.round(originalValueProfessional * changeRatio*100)/100;
    let newPremiumPrice = Math.round(originalValuePremium * changeRatio*100)/100;



    document.querySelector('h3.basic').textContent = unitSymbol + newBasicPrice;
    document.querySelector('h3.professional').textContent = unitSymbol + newProfessionalPrice;
    document.querySelector('h3.premium').textContent = unitSymbol + newPremiumPrice;
    
});



sessionStorage.setItem('popupDisplayed', 'false');

