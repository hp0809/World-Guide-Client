import config from '../config'

const CountryDetails = {
    saveCountryDetails(res) {
        window.localStorage.setItem(config.COUNTRY_INFO, JSON.stringify(res))
      },
      getCountryDetails() {
          return window.localStorage.getItem(config.COUNTRY_INFO)
      },
      clearCountryDetails() {
        window.localStorage.removeItem(config.COUNTRY_INFO)
    }
}

export default CountryDetails