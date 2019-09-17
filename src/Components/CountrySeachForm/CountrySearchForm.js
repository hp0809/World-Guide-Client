import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Button} from '../Utils/Utils';

export default class CountrySearchForm extends Component {
    constructor(props) {
        super(props)
        this.state= {
            country: undefined,
            error: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();  
        console.log(this.state)      
        
        if(this.state.country === undefined ||this.state.country === "undefined" ) {
            this.setState({error: 'Please select a country'})
        }
    }

    handleChange = (event) => {
        this.setState({country: event.target.value}, () => {
            console.log(this.state.country)
            });        
    }

    render() {
        
        const error = this.state.error
        if(this.state.country !== undefined) {
            return( 
                <>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <form 
                    className='CountrySearchForm'
                    onSubmit={this.handleSubmit}
                >
                <div className='CountryName'>
                    <select value={this.state.country} onChange={this.handleChange}>
                        <option defaultValue="undefined">Select</option>
                        <option value="China">China</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Spain">Spain</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Turkey">Turkey</option>
                        <option value="United Kingdom">United Kingdom</option>
                    </select>
                </div>
            <Link to={`/${this.state.country}`}>
                <Button type='submit'>
                    Let's Go!                   
                </Button>    
            </Link>
                     
            </form>
            </>
            )
        } else {
        return(
            <>
            <div role='alert'>
                {error && <p className='red'>{error}</p>}
            </div>
            <form 
                className='CountrySearchForm'
                onSubmit={this.handleSubmit}
            >
                <div className='CountryName'>
                    <select value={this.state.country} onChange={this.handleChange}>
                        <option defaultValue="undefined">Select</option>
                        <option value="China">China</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Spain">Spain</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Turkey">Turkey</option>
                        <option value="United Kingdom">United Kingdom</option>
                    </select>
                </div>
                
                <Button type='submit'>
                    Let's Go!                   
                </Button>    
                         
            </form>
            </>
        )
    }
}

}