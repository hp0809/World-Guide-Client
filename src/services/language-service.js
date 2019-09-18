import config from '../config'

const LanguageService = {
    getLanguageInfo(countryName) {
        return fetch(`${config.API_ENDPOINT}/language/${countryName}`, {            
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
            window.localStorage.setItem(config.LANG_INFO, JSON.stringify(res))
        })
    },
    clearLanguageInfo() {
        window.localStorage.removeItem(config.LANG_INFO)
    }
}

export default LanguageService