import config from '../config'
import CountryDetails from './country-details-service'

const CountryService = {
    getCountryInfo(countryName) {
        return fetch(`${config.API_ENDPOINT}/country/${countryName}`, {            
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