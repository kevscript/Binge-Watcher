import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../actions'
import placeholder from '../assets/placeholder.png'
import { ImpulseSpinner } from 'react-spinners-kit'
import styled from 'styled-components'

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Movie = ({ movie, fetchMovie, match }) => {
  const { info, people } = movie

  useEffect(() => {
    fetchMovie(match.params.id)
  }, [])

  if (movie.loading === true) {
    return (
      <SpinnerContainer>
        <ImpulseSpinner size={100} color='blue' loading={movie.loading} />
      </SpinnerContainer>
    )
  } else {
    return (
      <div>
        <div>
          <h3>{info.original_title}</h3>
          <p>{info.overview}</p>
          <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
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