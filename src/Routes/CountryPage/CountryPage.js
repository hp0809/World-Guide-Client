import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Section} from '../../Components/Utils/Utils';
import CountryService from '../../services/country-service';
import CountryDetails from '../../services/country-details-service';
import LanguageService from '../../services/language-service';
import APIContext from '../../APIContext';
import PlacesService from '../../services/places-service';
import './CountryPage.css'
import config from '../../config'


export default class CountryPage extends Component {
    static defaultProps = {
        match: {params: {} }
    }

    static contextType = APIContext;

    constructor(props) {
        super(props);
        this.state={
            currencyInfo:[],
            error: null,
            countryName: '',
            map: '',
            flag:'',
            capital:'',
            language:'',
            currency:'',
            currency_code: '',
            place1_name: '',
            place1_img: '',
            place1_link: '',
            place2_name: '',
            place2_img: '',
            place2_link: '',
            place3_name: '',
            place3_img: '',
            place3_link: '',
            place4_name: '',
            place4_img: '',
            place4_link: '',
        }
    }

    componentDidMount() {
        const {countryName} = this.props.match.params
        
        CountryService.getCountryInfo(countryName)
            .catch(this.state.error);
        PlacesService.getPlacesInfo(countryName)
            .catch(this.state.error);
        LanguageService.getLanguageInfo(countryName)
            .catch(this.state.error);
            
            
            
            
        fetch(`http://data.fixer.io/api/latest?access_key=1634d95e8dbb80da8bafd261065ed654&base=EUR`)
                .then(res => {
                    return res.json()}
                    )
                .then((data) => {
                    let currency = data.rates               
                    this.setState({currencyInfo: currency})
                    })
                .catch(console.log)
                .then(this.parseCountryLangPlace)
                .catch(console.log)
                
    } 

    renderCurrency = () => {        
        let code = this.state.currency_code
        let currency = this.state.currencyInfo
        const currencyCode = Object.keys(currency)
        const currencyValue = Object.values(currency)
        for(let i = 0; i<currencyCode.length; i++) {
            if(code === currencyCode[i]) {
                return currencyValue[i]
            } 
        }
    }
    
    parseLangInfo = () => {
        const langInfo = window.localStorage.getItem(config.LANG_INFO)
        return JSON.parse(langInfo)
    }
    parseCountryInfo = () => {
        const countryInfo = window.localStorage.getItem(config.COUNTRY_INFO)
        
        return JSON.parse(countryInfo)
    }

    parsePlaceInfo = () => {
        const placeInfo = window.localStorage.getItem(config.PLACE_INFO)
        console.log(placeInfo)
        return JSON.parse(placeInfo)
    }
    parseCountryLangPlace = () => {
        const countryInfo = this.parseCountryInfo()
        const langInfo = this.parseLangInfo()
        const placeInfo = this.parsePlaceInfo()
        
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
            would_like: langInfo.would_like,
            place1_name: placeInfo.place1_name,
            place1_img: placeInfo.place1_img,
            place1_link: placeInfo.place1_link,
            place2_name: placeInfo.place2_name,
            place2_img: placeInfo.place2_img,
            place2_link: placeInfo.place2_link,
            place3_name: placeInfo.place3_name,
            place3_img: placeInfo.place3_img,
            place3_link: placeInfo.place3_link,
            place4_name: placeInfo.place4_name,
            place4_img: placeInfo.place4_img,
            place4_link: placeInfo.place4_link,
        })       
    }

    handleClick = () => {
        CountryDetails.clearCountryDetails();
        LanguageService.clearLanguageInfo();
        PlacesService.clearPlaceInfo();
    }

    render() {
        const countryInfo = this.state
        const langInfo = this.state
        const placeInfo = this.state
        const error = this.state.error
        return (
        <div className='countryPage'>
            <div role='alert'>
                {error && <p className='red'>{error}</p>}
            </div>
            <Link to='/'>
                <button type='submit' onClick={this.handleClick}>
                    Search another country!
                </button>
            </Link>
            <h1>{this.state.countryName}</h1>
                <div className="countryHeader">
                    <img src={`${countryInfo.flag}`} 
                        alt={`The flag of ${countryInfo.name}`}
                        />
                </div>
                <Section className='map'>
                    <img src={`${countryInfo.map}`} alt={`A map of ${countryInfo.name}`}
                         
                    />
                </Section>
                <h3>The capital of {countryInfo.countryName} is {countryInfo.capital}</h3>
                <Section className='details'>
                    <Section className='currencyInfo'>
                        <h3>{countryInfo.countryName}'s currency is the {countryInfo.currency}</h3>
                        <p>Today's exchange rate is:</p>
                        <p>1 EUR = {countryInfo.currency_code}</p>
                        
                    </Section>
                    <Section className='langInfo'>
                        <h4>{countryInfo.countryName} speaks {countryInfo.language}</h4>
                        <p>Here are some helpful phrases</p>
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
                    <Section className="placesToGo">
                        <h4>Places to visit in {countryInfo.countryName}</h4>
                        <ul className='places'>
                            <li>
                                <p>{placeInfo.place1_name}</p>
                                <img alt={`${placeInfo.place1_name}`} src={`${placeInfo.place1_img}`}/>
                                <a href={`${placeInfo.place1_link}`} >
                                    <p>More info</p>
                                </a> 
                            </li>
                            <li>
                                <p>{placeInfo.place2_name}</p>
                                <img alt={`${placeInfo.place2_name}`} src={`${placeInfo.place2_img}`}/>
                                <a href={`${placeInfo.place2_link}`} >
                                    <p>More info</p>
                                </a>  
                            </li>
                            <li>
                                <p>{placeInfo.place3_name}</p>
                                <img alt={`${placeInfo.place3_name}`} src={`${placeInfo.place3_img}`}/>
                                <a href={`${placeInfo.place3_link}`} >
                                    <p>More info</p>
                                </a>  
                            </li>
                            <li>
                                <p>{placeInfo.place4_name}</p>
                                <img alt={`${placeInfo.place4_name}`} src={`${placeInfo.place4_img}`}/>
                                <a href={`${placeInfo.place4_link}`} >
                                    <p>More info</p>
                                </a>  
                            </li>  
                        </ul>
                    </Section>

                </Section>
            </div>
        )
    } 
}
