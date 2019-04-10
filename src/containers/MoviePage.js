import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../actions'
import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholder.png'
import styled from 'styled-components'
import Spinner from '../components/Spinner'
import MoviesList from '../components/MoviesList'

const AvatarLink = styled(Link)`
  position: relative;
  width: 45px;
  height: 45px; 
  overflow: hidden; 
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AvatarImg = styled.img`
  display: block; 
  width: 45px; 
  height: auto;
`

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
        <div>
          <img src={info.poster_path ? `http://image.tmdb.org/t/p/w185${info.poster_path}` : placeholder} alt='poster' />
        </div>
        <div>
          <h1>{info.title}</h1>
          <h3>{info.tagline}</h3>
          <p>{info.overview}</p>
          <h3>Genres</h3>
          <ul style={{display: 'flex'}}>
            {info.genres && info.genres.map(x => {
              return (<li key={`genre-${x.id}`}>{x.name}</li>)
            })}
          </ul>
          <h3>Cast</h3>
          <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
            {people.cast && people.cast.map(x => {
              return (
                <li key={`cast_${x.id}`}>
                  <AvatarLink to={`/profile/${x.id}`} data-id={x.id}>
                    <AvatarImg src={x.profile_path ? `http://image.tmdb.org/t/p/w185${x.profile_path}` : placeholder} alt='' />
                  </AvatarLink>
                </li>
              )
            })}
          </ul>
          <h3>Recommendations</h3>
          <MoviesList data={recommend.results} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)