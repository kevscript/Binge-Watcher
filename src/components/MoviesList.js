import React from 'react'
import { Link } from 'react-router-dom' 
import styled from 'styled-components'
import placeholder from '../assets/placeholder.png'

const MoviesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`

const MoviesListItem = styled.div`
  width: 250px;
  border-radius: 10px; 
  margin: 25px 0;
  transition: 0.3s;

  :hover {
    transform: scale(1.05);
    box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);
  }
`

const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;
`

const MoviePosterContainer = styled.div`
  position: relative; 
  height: calc(100% - 80px);
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`

const MoviePoster = styled.img`
  display: block; 
  width: 100%; 
  height: auto; 
  margin: auto;
`

const MovieSubContainer = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  height: 80px;
`

const MovieSubTitle = styled.div`
  text-align: center; 
  width: 80%;
  font-size: 18px;
`

const MoviesList = ({data}) => {
  return (
    <MoviesListContainer>
      {data && data.map(movie => {
        return (
          <MoviesListItem key={movie.id}>
            <MovieLink 
              to={`/movies/${movie.id}`}  
              data-id={movie.id} 
            >
              <MoviePosterContainer>
                <MoviePoster src={movie.poster_path !== null ? `http://image.tmdb.org/t/p/w342${movie.poster_path}` : placeholder} alt='movie poster' />
              </MoviePosterContainer>
              <MovieSubContainer>
                <MovieSubTitle>{movie.title}</MovieSubTitle>
              </MovieSubContainer>
            </MovieLink>
          </MoviesListItem>
        )
      })}
    </MoviesListContainer>
  )
}

export default MoviesList