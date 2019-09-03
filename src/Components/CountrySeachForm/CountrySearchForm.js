import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Button, Textarea} from '../Utils/Utils';
import CountryPage from '../../Routes/CountryPage/CountryPage';

export default class CountrySearchForm extends Component {
    constructor(props) {
        super(props)
        this.state= {
            country: ''
        }
    }
    handleSUbmit = ev => {
        ev.preventDefault()

    }

    render() {
        return(
            <form 
                className='CountrySearchForm'
                onSubmit={this.handleSUbmit}
            >
                <div className='CountryName'>
                    <select value={this.state.country}>
                        <option value="Canada">Canada</option>
                        <option value="Japan">Japan</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Spain">Spain</option>
                    </select>
                </div>
                <Link to='/countryPage' component={CountryPage}>
                <Button type='submit'>
                    Let's go!
                </Button>
                </Link>
            </form>
        )
    }
}