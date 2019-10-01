import React, {Component} from 'react'
import {Section} from '../../Components/Utils/Utils'
import CountrySearchForm from '../../Components/CountrySeachForm/CountrySearchForm'
import './LandingPage.css'
import APIContext from '../../APIContext'

export default class LandingPage extends Component {
    state = {error:null}

    static contextType = APIContext

    componentDidMount() {
        this.context.setUserInfo();
    }
    render() {
        return(
            <>
            <Section className='mainPage'>
                <h1>World Guide</h1>
                <h3>Where will you go to next...?</h3>
                <CountrySearchForm />
            </Section>
            <div className='about'>
                
                <p>Hi and welcome to World Guide! This is just the beginning of this app and so the countries available are quite limited but we hope you enjoy your time here and learn something new!</p>
            </div>
            <div className='forTesters'>
                <h3>For Testers</h3>
                <p>This app can be used with or without registering. If you would like to test the register feature, please register first and then use the app or you may use these test credentials: username: test_user password: Password!2 . Thank you for your time!</p>

            </div>
            </>
        )
    }
}