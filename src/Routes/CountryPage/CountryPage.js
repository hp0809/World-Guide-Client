import React, {Component} from 'react';
import {Section} from '../../Components/Utils/Utils';


export default class CountryPage extends Component {
    static defaultProps = {
        match: {params: {} }
    }

    render() {
        return (
            <>
                <h1>COUNTRY NAME</h1>
                <div class="countryHeader">
                    <img src="http://placekitten.com/500/300" />
                </div>
                <p>COUNTDOWN</p>
                <Section className='map'>
                    <img src="https://blog.capterra.com/wp-content/uploads/2017/10/GoogleMapsUSA.png" 
                        width="80%" 
                    />
                </Section>
                <Section className='details'>
                    <Section className='currencyInfo'>
                        <h3>Currency Info</h3>
                        <p>¥ $ £ € ₩ ft kr</p>
                    </Section>
                    <Section className='langInfo'>
                        <h4>COUNTRY speaks LANGUAGE</h4>
                        <p>Some helpful phrases</p>
                        <ul>
                            <li>Phrase 1</li>
                            <li>Phrase 2</li>
                            <li>Phrase 3</li>
                            <li>Phrase 4</li>
                        </ul>
                    </Section>
                    <Section class="placesToGo">
                        <ul className='places'>
                            <li>
                                Place 1
                                <img src="http://placekitten.com/80/80"/> 
                            </li>
                            <li>
                                Place 2
                                <img src="http://placekitten.com/80/80"/> 
                            </li>
                            <li>
                                Place 3
                                <img src="http://placekitten.com/80/80"/> 
                            </li>
                            <li>
                                Place 4
                                <img src="http://placekitten.com/80/80"/> 
                            </li>  
                        </ul>
                     </Section>

                </Section>
            </>
        )
    }
}
