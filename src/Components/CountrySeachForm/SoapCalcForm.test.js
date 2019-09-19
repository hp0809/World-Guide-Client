import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CountrySearchForm from './CountrySearchForm'

describe(`CountrySearchForm component`, () => {
  it('renders a form.CountrySearchForm by default', () => {
    const wrapper = shallow(<CountrySearchForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
