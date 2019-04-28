import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../components/Pagination'

describe('Pagination component', () => {
  let container
  const page = 3
  const totalPages = 10

  beforeEach(() => {
    container = shallow(<Pagination page={page} totalPages={totalPages} />)
  })

  it('should have a div that display current page number', () => {
    const div = container.find('[data-test="currentPage"]')
    expect(div.text()).toEqual(`${page} / ${totalPages}`)
  })

})