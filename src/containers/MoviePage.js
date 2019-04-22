import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../actions'
import Spinner from '../components/Spinner'
import MoviesList from '../components/MoviesList'
import MovieInfo from '../components/MovieInfo'
import styled from 'styled-components'

const MoviePageContainer = styled.div`
  width: 90%;
  margin: 0 auto
`

const Title = styled.h3`
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  line-height: 3;

  @media (max-width: 700px) {
    text-align: center;
  }
`

const Brake = styled.div`
  width: 100%;
  height: 50px;
`
const MoviePage = ({ movie, fetchMovie, match }) => {
  const { info, people, recommend, loading } = movie

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchMovie(match.params.id)
  }, [])

  if (loading) {
    return (
      <Spinner size={100} loading={loading} />
    )
  } else {
    return (
      <MoviePageContainer>
        <MovieInfo info={info} cast={people} />
        <Brake />
        {recommend.results.length > 0
          ? (
            <div>
              <Title>Recommendations</Title>
              <MoviesList data={recommend.results} />
            </div>
          )
          : null
        }
      </MoviePageContainer>
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