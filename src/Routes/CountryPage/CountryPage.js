import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Section} from '../../Components/Utils/Utils';
import config from '../../config'
import CountryService from '../../services/country-service';
import CountryDetails from '../../services/country-details-service'
import LanguageService from '../../services/language-service';
import UserService from '../../services/user-service'
import APIContext from '../../APIContext'


export default class CountryPage extends Component {
    static defaultProps = {
        match: {params: {} }
    }

    static contextType = APIContext;

    constructor(props) {
        super(props);
        this.state={
            currencyInfo:'',
            error: null,
            countryName: '',
            map: '',
            flag:'',
            capital:'',
            language:'',
            currency:'',
            currency_code: ''

        }
    }

    componentDidMount() {
        const {countryName} = this.props.match.params
        const currencyCode = this.state.currency_code
        console.log(currencyCode)
        CountryService.getCountryInfo(countryName)
        LanguageService.getLanguageInfo(countryName)
            .then(this.parseCountryAndLang)
            .catch(this.state.error);
        fetch(`http://data.fixer.io/api/latest?access_key=1634d95e8dbb80da8bafd261065ed654&base=EUR&symbols=${currencyCode}`
                )
                .then(res => res.json())
                .then((data) => {
                    JSON.stringify(data)
                    this.setState({currencyInfo: [data]})
                })
    } 

    
    parseCountryAndLang = () => {
        const countryInfo = JSON.parse(window.localStorage.countryInfo)
        const langInfo = JSON.parse(window.localStorage.langInfo)
        this.setState ({
            countryName: countryInfo.name,
            map: countryInfo.map,
            flag: countryInfo.flag,
            capital: countryInfo.capital,
            language: countryInfo.language,
            currency: countryInfo.currency,
            currency_code: countryInfo.currency_code,
            hello: langInfo.hello,
            goodbye: langInfo.goodbye,
            thank_you: langInfo.thank_you,
            excuse_me: langInfo.excuse_me,
            please: langInfo.please,
            sorry: langInfo.sorry,
            toilet: langInfo.toilet,
            english: langInfo.english,
            cost: langInfo.cost,
            would_like: langInfo.would_like
        })        
    }

    handleClick = () => {
        CountryDetails.clearCountryDetails();
        LanguageService.clearLanguageInfo();
        console.log(window.localStorage)
    }
    render() {
        console.log(this.state.currencyInfo["rates"])
        const countryInfo = this.state
        const langInfo = this.state
        const currencyInfo = this.state
        const curencyCode = this.state.currency_code
        return (
        <>
            <Link to='/'>
                <button type='submit' onClick={this.handleClick}>
                    Search another country!
                </button>
            </Link>
            <h1>{this.state.countryName}</h1>
                <div className="countryHeader">
                    <img src={`${countryInfo.flag}`} 
                        alt={`The flag of ${countryInfo.name}`}
                        width="80%" />
                </div>
                <Section className='map'>
                    <img src={`${countryInfo.map}`} alt={`A map of ${countryInfo.name}`}
                        width="80%" 
                    />
                </Section>
                <p>The capital of {countryInfo.countryName} is {countryInfo.capital}</p>
                <Section className='details'>
                    <Section className='currencyInfo'>
                        <h3>{countryInfo.countryName}'s currency is the {countryInfo.currency}</h3>
                        <p>EUR to {countryInfo.currency_code}</p>
                        
                    </Section>
                    <Section className='langInfo'>
                        <h4>{countryInfo.countryName} speaks {countryInfo.language}</h4>
                        <p>Some helpful phrases</p>
                        <ul>
                            <li>Hello: {langInfo.hello}</li>
                            <li>Goodbye: {langInfo.goodbye}</li>
                            <li>Thank you: {langInfo.thank_you}</li>
                            <li>Excuse me: {langInfo.excuse_me}</li>
                            <li>Please: {langInfo.please}</li>
                            <li>I'm sorry: {langInfo.sorry}</li>
                            <li>Where is the toilet?: {langInfo.toilet}</li>
                            <li>Do you speak English?: {langInfo.english}</li>
                            <li>How much is this?: {langInfo.cost}</li>
                            <li>I would like this: {langInfo.would_like}</li>
                        </ul>
                    </Section>
                    {/*<Section className="placesToGo">
                        <ul className='places'>
                            <li>
                                Place 1
                                <img alt='kitty' src="http://placekitten.com/80/80"/> 
                            </li>
                            <li>
                                Place 2
                                <img alt='kitty' src="http://placekitten.com/80/80"/> 
                            </li>
                            <li>
                                Place 3
                                <img alt='kitty' src="http://placekitten.com/80/80"/> 
                            </li>
                            <li>
                                Place 4
                                <img alt='kitty' src="http://placekitten.com/80/80"/> 
                            </li>  
                        </ul>
                    </Section>*/}

                </Section>
            </>
        )
    } 
}
