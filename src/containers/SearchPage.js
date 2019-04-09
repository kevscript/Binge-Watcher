import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSearch } from '../actions'
import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholder.png'
import { ImpulseSpinner } from 'react-spinners-kit'
import styled from 'styled-components'


const SearchPage = ({ fetchSearch, search, match }) => {

  useEffect(() => {
    fetchSearch(match.params.value)
  }, [])

  if (search.loading) {
    return <h1>Loading</h1>
  } else {
    return (
      <h1>SearchPage</h1>
    )
  }

}

const mapStateToProps = (state) => ({
  search: state.search
})

const mapDispatchToProps = {
  fetchSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)