import React from 'react'
import styled from 'styled-components'
import placeholder from '../assets/placeholder.png'
import CastList from './CastList'

const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px 0;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const PosterContainer = styled.div`
  overflow: hidden;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 0 auto;
  }
`

const PosterImg = styled.img`
  display: block;
  border-radius: 15px;
  width: 100%;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  @media (max-width: 700px) {
    margin-left: 0;
    margin-top: 20px;
  }
`

const Title = styled.h1`
  font-size: 36px;
  line-height: 1;

  @media (max-width: 700px) {
    text-align: center;
  }
`

const Text = styled.p`
  color: ${props => props.theme.colors.text};
  max-width: 500px;
  margin: 20px 0;

  @media (max-width: 700px) {
    text-align: center;
    margin: 20px auto;
  }
`

const Option = styled.h3`
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  margin: 5px 0;

  @media (max-width: 700px) {
    text-align: center;
    margin: 25px 0 15px;
  }
`

const SubTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  text-transform: uppercase;
  margin: 10px 0;

  @media (max-width: 700px) {
    text-align: center;
  }
`

const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    justify-content: center;
  }
`

const GenresItem = styled.li`
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  border-radius: 10px;
  margin: 10px 10px 10px 0;
  padding: 5px 15px;
  background: #f4f4f4;
`

const CastContainer = styled.div`
  max-width: 550px;
`

const Brake = styled.div`
  width: 100%;
  height: 25px;
`

const MovieInfo = ({info, cast}) => {
  return (
    <MovieInfoContainer>
      <PosterContainer>
        <PosterImg src={info.poster_path ? `http://image.tmdb.org/t/p/w500${info.poster_path}` : placeholder} alt='poster' />
      </PosterContainer>
      <InfoContainer>
        <div>
          <Title>{info.title}</Title>
          <SubTitle>{info.tagline}</SubTitle>
          <Option>{info.vote_average === 0 ? info.release_date : info.vote_average}</Option>
          <Text>{info.overview}</Text>
        </div>
        <Brake />
        <Option>Genres</Option>
        <GenresList>
          {info.genres && info.genres.map(x => {
            return (<GenresItem key={`genre-${x.id}`}>{x.name}</GenresItem>)
          })}
        </GenresList>
        <Brake />
        <Option>Cast</Option>
        <CastContainer>
          <CastList data={cast} />
        </CastContainer>
      </InfoContainer>
    </MovieInfoContainer>
  )
}

export default MovieInfo