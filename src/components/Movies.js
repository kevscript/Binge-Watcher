import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'
import placeholder from '../assets/placeholder.png'
import styled from 'styled-components'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  height: 80px;
`

const Pagination = styled.span`

`

const PrimaryButton = styled.button`
  cursor: pointer;
  display: block;
  padding: 8px 20px;
  border: 1px solid #f4f4f4;
  border-radius: 15px;
  background-color: transparent;
  font-family: 'Source Sans Pro';
  transition: 0.3s;

  :disabled {
    opacity: 0.5;
    color: transparent;
  }

  :hover:enabled {
    border: 1px solid #666;
  }
`

const MoviesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`

const MoviesListItem = styled.div`
  width: 250px;
  border-radius: 10px; 
  margin: 25px;
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

const Movies = ({ movies, fetchMovies }) => {

  const { page, total_pages, results, total_results, error, loading } = movies

  useEffect(() => {
    fetchMovies()
  }, [])

  if (loading === true) {
    return <h1>Loading</h1>
  } else if (error) {
    return <h1>{error}</h1>
  } else {
    return (
      <div>
        <PaginationContainer>
          <PrimaryButton 
            onClick={() => fetchMovies(page - 1)}
            disabled={page === 1 ? true : false}
          >
            {`page ${page - 1}`}
          </PrimaryButton>
          <Pagination>{page} / {total_pages}</Pagination>
          <PrimaryButton 
            onClick={() => fetchMovies(page + 1)}
            disabled={page === total_pages ? true : false}
          >
            {`page ${page + 1}`}
          </PrimaryButton>
        </PaginationContainer>
        <MoviesListContainer>
          {results && results.map(movie => {
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
          <PaginationContainer>
            <PrimaryButton 
              onClick={() => fetchMovies(page - 1)}
              disabled={page === 1 ? true : false}
            >
              {`page ${page - 1}`}
            </PrimaryButton>
            <Pagination>{page} / {total_pages}</Pagination>
            <PrimaryButton 
              onClick={() => fetchMovies(page + 1)}
              disabled={page === total_pages ? true : false}
            >
              {`page ${page + 1}`}
            </PrimaryButton>
          </PaginationContainer>
        </MoviesListContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
})

const mapDispatchToProps = {
  fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)