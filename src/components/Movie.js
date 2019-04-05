import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../actions'
import placeholder from '../assets/placeholder.png'

const Movie = ({ movie, fetchMovie, match }) => {
  const { info, people } = movie

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
        <h1>title: {info.original_title}</h1>
        <h1>budget: {info.budget} $</h1>
        <ul style={{display: 'flex', flexWrap: 'wrap'}}>
          {people.cast && people.cast.map(x => {
            return (
              <li key={`cast_${x.id}`}>
                <div style={{ position: 'relative', width: '45px', height: '45px', overflow: 'hidden', borderRadius: '50%' }}>
                  <img src={x.profile_path !== null ? `http://image.tmdb.org/t/p/w185${x.profile_path}` : placeholder} alt='' style={{ display: 'block', width: '45px', height: 'auto' }} />
                </div>
              </li>
            )
          })}
        </ul>
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