import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../actions'
import Spinner from '../components/Spinner'
import MoviesList from '../components/MoviesList'
import CastList from '../components/CastList'
import MovieInfo from '../components/MovieInfo'

const MoviePage = ({ movie, fetchMovie, match }) => {
  const { info, people, recommend } = movie

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchMovie(match.params.id)
  }, [])

  if (movie.loading) {
    return (
      <Spinner size={100} color={'blue'} loading={movie.loading} />
    )
  } else {
    return (
      <div>
        <MovieInfo data={info} />
        <h3>Cast</h3>
        <CastList data={people} />
        <h3>Recommendations</h3>
        <MoviesList data={recommend.results} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)