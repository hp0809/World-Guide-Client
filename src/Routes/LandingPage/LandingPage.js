import React, {Component} from 'react'
import {Section} from '../../Components/Utils/Utils'
import CountrySearchForm from '../../Components/CountrySeachForm/CountrySearchForm'
//import './LandingPage.css'


export default class LandingPage extends Component {

    render() {
        return(
            <>
            <Section className='MainPage'>
                <h1>World Guide</h1>
                <h3>Where will you go to next...?</h3>
                <CountrySearchForm />
            </Section>
            </>
        )
    }
}