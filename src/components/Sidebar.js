import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchGenres, selectSort, selectGenres } from '../actions'

const Sidebar = ({ fetchGenres, options, selectGenres, selectSort }) => {

  const { genres, sortBy } = options

  useEffect(() => {
    fetchGenres()
  }, [])

  const handleSortSelection = (e) => {
    if (e.target.getAttribute('data-type') === 'sort') {
      selectSort(e.target.getAttribute('data-query'))
    }
  }

  const handleGenresSelection = (e) => {
    if (e.target.getAttribute('data-type') === 'genre') {
      selectGenres(e.target.getAttribute('data-query'))
    }
  }

  return (
    <div>
      <div>
        <h3>Sort By</h3>
        <ul>
          {sortBy && sortBy.map(el => {
            return (
              <li
                key={el.query}
                data-query={el.query}
                data-type='sort'
                onClick={handleSortSelection}
                style={el.selected ? {color: 'red'} : {color: '#000'}}
              >
                {el.name}
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h3>Genres</h3>
        <ul>
          {genres && Object.keys(genres).map(i => {
            return (
              <li style={genres[i].selected === true ? { color: 'red' } : { color: '#000' }}
                key={genres[i].id}
                data-query={genres[i].id}
                data-type='genre'
                onClick={handleGenresSelection}
              >
                {genres[i].name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  options: state.options
})

const mapDispatchToProps = {
  fetchGenres,
  selectSort,
  selectGenres,
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)