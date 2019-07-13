import React from 'react'
import { shallow } from 'enzyme'
import AppBar from './AppBar'

describe('AppBar', () => {
  it('should render correctly', () => {
    const component = shallow(<AppBar logoPath="logo.svg" />)

    expect(component).toMatchSnapshot()
  })
})
