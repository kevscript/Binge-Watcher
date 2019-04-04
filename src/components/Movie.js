import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../actions'

const Movie = ({ movie, fetchMovie, match }) => {
  useEffect(() => {
    fetchMovie(match.params.id)
  }, [])

  if (movie.loading === true) {
    return <h1>Loading</h1>
  } else if (movie.error) {
    return <h1>{movie.error}</h1>
  } else {
    return (
      <div>
        <h1>title: {movie.info.original_title}</h1>
        <h1>budget: {movie.info.budget} $</h1>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  movie: state.movie
})

const mapDispatchToProps = {
  fetchMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)