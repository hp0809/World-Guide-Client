import React, {Component} from 'react'
import {Section} from '../../Components/Utils/Utils'
import CountrySearchForm from '../../Components/CountrySeachForm/CountrySearchForm'
import './LandingPage.css'
import CountryDetails from '../../services/country-details-service'
import LanguageService from '../../services/language-service'
import PlacesService from '../../services/places-service'


export default class LandingPage extends Component {

    componentDidMount() {
        CountryDetails.clearCountryDetails();
        LanguageService.clearLanguageInfo();
        PlacesService.clearPlaceInfo();
    }

    render() {
        return(
            <>
            <Section className='mainPage'>
                <h1>World Guide</h1>
                <h3>Where will you go to next...?</h3>
                <CountrySearchForm />
            </Section>
            <div className='forTesters'>
                <p>Hi and welcome to World Guide! This is just the beginning of this app and so the countries available are quite limited but we hop eyou enjoy your time here and learn something new!</p>
            </div>
            </>
        )
    }
}