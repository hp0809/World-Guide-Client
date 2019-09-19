import React, {Component} from 'react'
import {Section} from '../../Components/Utils/Utils'
import CountrySearchForm from '../../Components/CountrySeachForm/CountrySearchForm'
import './LandingPage.css'


export default class LandingPage extends Component {

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