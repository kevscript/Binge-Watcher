import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'

const App = ({ movies, fetchMovies }) => {


  useEffect(() => {
    fetchMovies()
  }, [])

  if (movies.loading) {
    return <h1>Loading</h1>
  } else if (movies.error) {
    return <h1>{movies.error}</h1>
  } else {
    return (
      <div>
        <h1>hi from App</h1>
        <h1>{movies.data.page}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = {
  fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(App)