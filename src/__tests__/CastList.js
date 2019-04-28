import React from 'react'
import { shallow } from 'enzyme'
import CastList from '../components/CastList'

describe('CastList component', () => {
  let container

  const data = {
    cast: [
      {id: '1'},
      {id: '2'},
      {id: '3'}
    ]
  }

  beforeEach(() => {
    container = shallow(<CastList data={data}/>)
  })

  it('should render a CastItem for each cast member', () => {
    const items = container.find('CastItem')
    expect(items).toHaveLength(data.cast.length)
  })
  
})