import React from 'react'
import { shallow } from 'enzyme'
import MoviesList from '../components/MoviesList'

describe('MoviesList component', () => {
  let container

  const data = [
    {id: '1'},
    {id: '2'},
    {id: '3'}
  ]

  beforeEach(() => {
    container = shallow(<MoviesList data={data} />)
  })

  it('should render a MoviesListItem for each movie', () => {
    const items = container.find('MoviesListItem')
    expect(items).toHaveLength(data.length)
  })

})