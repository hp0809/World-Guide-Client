import config from '../config'

const CurrencyService = {
    getCurrencyInfo(currency) {
        return fetch(`http://data.fixer.io/api/latest?access_key=${config.FIXER_API_KEY}&format=1`, {            
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        .then(res => 
            (!res.ok) 
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
        .then(res => {
            CountryDetails.saveCountryDetails(res)
        })
    },
    
}

export default CountryService