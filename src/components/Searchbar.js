import React from 'react'
import { connect } from 'react-redux'
import { changeSearchInput } from '../actions'
import { Link } from 'react-router-dom'

const Searchbar = ({ search, changeSearchInput }) => {

  const handleSearchInput = (e) => {
    changeSearchInput(e.target.value)
  }

  return (
    <div>
      <input type='text' onChange={handleSearchInput} value={search.input} />
      <Link to={`/search/${search.input}`}>Search</Link>
    </div>
  )
}

const mapStateToProps = state => ({
  search: state.search
})

const mapDispatchToProps = {
  changeSearchInput
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)