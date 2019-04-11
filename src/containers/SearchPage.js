import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSearch } from '../actions'
import Spinner from '../components/Spinner'
import MoviesList from '../components/MoviesList'
import Pagination from '../components/Pagination'
import styled from 'styled-components'

const SearchPageContainer = styled.div`
  width: 90%;
  margin: 0 auto
`



const SearchPage = ({ fetchSearch, search, match }) => {

  const { results, page, total_pages, loading } = search

  useEffect(() => {
    fetchSearch(1, match.params.value)
  }, [])

  if (loading) {
    return <Spinner size={100} loading={loading} />
  } else {
    return (
      <SearchPageContainer>
        <p>Search results for {match.params.value}</p>
        <Pagination fetchData={fetchSearch} page={page} totalPages={total_pages} query={match.params.value} />
        <MoviesList data={results} />
        <Pagination fetchData={fetchSearch} page={page} totalPages={total_pages} query={match.params.value} />
      </SearchPageContainer>
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