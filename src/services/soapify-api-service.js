import config from '../config'
import OilService from './oil-service'
import TokenService from '../services/token-service'

const SoapifyApiService = {
    getSAPValues() {
        return fetch(`${config.API_ENDPOINT}/oils`, {            
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        
        .then(res => 
            (!res.ok) 
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
        .then(res => {
            OilService.saveOilInfo(res)
            return res
        })
    },
}

export default SoapifyApiService