import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'

const App = ({ movies, fetchMovies }) => {

  const { page, total_pages, results, total_results, error, loading } = movies

  useEffect(() => {
    fetchMovies()
  }, [])

  if (loading) {
    return <h1>Loading</h1>
  } else if (error) {
    return <h1>{error}</h1>
  } else {
    return (
      <div>
        <button onClick={() => page > 1 ? fetchMovies(page - 1): null}>prev page</button>
        <button onClick={() => fetchMovies(page + 1)}>next page</button>
        <h1>hi from App</h1>
        <h3>page: {page}</h3>
        <h3>total pages: {total_pages}</h3>
        <h3>total results: {total_results}</h3>
        <h3>name of movies from page:</h3>
        {results.map(movie => <p>{movie.title}</p>)}
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