import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom'
import {Button} from '../Utils/Utils';
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage';

export default class CountrySearchForm extends Component {
    constructor(props) {
        super(props)
        this.state= {
            countryName: undefined,
            error: null,
            redirect: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();  
        console.log(this.state)
              
        
        if(this.state.countryName === undefined ||this.state.countryName === "undefined" ) {
            this.setState({error: 'Please select a country'})
        }
    }

    handleChange = (event) => {
        this.setState({countryName: event.target.value}, () => {
            console.log(this.state.countryName)
            });        
    }
    /*
    setRedirect = () => {
        if(this.state.countryName !== 'China'
            || this.state.countryName !== 'France'
            || this.state.countryName !== 'Germany'
            || this.state.countryName !== 'Italy'
            || this.state.countryName !== 'Japan'
            || this.state.countryName !== 'Portugal'
            || this.state.countryName !== 'Spain'
            || this.state.countryName !== 'Thailand'
            || this.state.countryName !== 'Turkey') {
                this.setState({redirect: true})
            }
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect component={NotFoundPage}/>
        }
    }*/

    render() {
        
        const error = this.state.error
        if(this.state.countryName !== undefined) {
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
                    <select value={this.state.countryName} onChange={this.handleChange}>
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
                    </select>
                </div>
            <Link to={`/${this.state.countryName}`}>
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
                    <select value={this.state.countryName} onChange={this.handleChange}>
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