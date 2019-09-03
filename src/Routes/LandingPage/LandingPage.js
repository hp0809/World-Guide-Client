import React, {Component} from 'react'
import {Section} from '../../Components/Utils/Utils'
import CountrySearchForm from '../../Components/CountrySeachForm/CountrySearchForm'
//import './LandingPage.css'


export default class LandingPage extends Component {

    render() {
        return(
            <>
            <Section className='MainPage'>
                <h1>APP NAME</h1>
                <h2>APP SUBTITLE</h2>
                <CountrySearchForm />
            </Section>
            </>
        )
    }
}