import React from 'react'
import styled from 'styled-components'
import placeholder from '../assets/placeholder.png'
import CastList from './CastList'

const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px 0;
`

const PosterContainer = styled.div`
  border-radius: 15px;
  min-width: 30%;
`

const PosterImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`

const Title = styled.h1`
  font-size: 36px;
  line-height: 1;
`

const Text = styled.p`
  color: ${props => props.theme.colors.text};
  max-width: 500px;
`

const Option = styled.h3`
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  line-height: 1.5;
`

const SubTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  text-transform: uppercase;
  line-height: 3;
`

const GenresList = styled.ul`
  display: flex;
`

const GenresItem = styled.li`
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  border-radius: 10px;
  margin-right: 15px;
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