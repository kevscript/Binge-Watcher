import React from 'react'
import { shallow } from 'enzyme'
import Burger from '../components/Burger'

describe('Burger component', () => {

  it('should contain 3 lines', () => {
    const container = shallow(<Burger />)
    const lines = container.find('BurgerLine')
    expect(lines).toHaveLength(3)
  })
})


