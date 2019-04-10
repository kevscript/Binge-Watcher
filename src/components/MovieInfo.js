import React from 'react'
import styled from 'styled-components'
import placeholder from '../assets/placeholder.png'

const MovieInfo = ({data}) => {
  return (
    <div>
      <div>
        <img src={data.poster_path ? `http://image.tmdb.org/t/p/w342${data.poster_path}` : placeholder} alt='poster' />
      </div>
      <div>
        <h1>{data.title}</h1>
        <h3>{data.tagline}</h3>
        <p>{data.overview}</p>
        <h3>Genres</h3>
        <ul style={{display: 'flex'}}>
          {data.genres && data.genres.map(x => {
            return (<li key={`genre-${x.id}`}>{x.name}</li>)
          })}
        </ul>
      </div>
    </div>
  )
}

export default MovieInfo