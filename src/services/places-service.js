import config from '../config'

const PlacesService = {
    getPlacesInfo(countryName) {
        return fetch(`${config.API_ENDPOINT}/places/${countryName}`, {            
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
            window.localStorage.setItem(config.PLACE_INFO, JSON.stringify(res))
        })
    },
    clearPlaceInfo() {
        window.localStorage.removeItem(config.PLACE_INFO)
    }
}

export default PlacesService