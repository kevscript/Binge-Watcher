import React, { useState, useRef } from "react";
import styled from "styled-components";
import placeholder from "../assets/placeholder.png";
import CastList from "./CastList";
import Iframe from "./Iframe";
import PropTypes from "prop-types";

const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PosterContainer = styled.div`
  overflow: hidden;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: start;
    align-items: start;
    width: 50%;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const PosterImg = styled.img`
  display: block;
  border-radius: 1rem;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 1;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  max-width: 65ch;
  margin: 20px 0;

  @media (max-width: 768px) {
    text-align: center;
    margin: 20px auto;
  }
`;

const Option = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  margin: 5px 0;

  @media (max-width: 768px) {
    text-align: center;
    margin: 25px 0 15px;
  }
`;

const SubTitle = styled.h3`
  color: ${(props) => props.theme.colors.text};
  margin: 10px 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const GenresItem = styled.li`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  border-radius: 10px;
  margin: 10px 10px 10px 0;
  padding: 5px 15px;
  background: #f4f4f4;
`;

const CastContainer = styled.div`
  max-width: 32rem;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Brake = styled.div`
  width: 100%;
  height: 25px;
`;

const TrailerButtonContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TrailerButton = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
  background: ${(props) => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: #f4f4f4;
  border: 0;
  outline: 0;
  font-size: 16px;
`;

const MovieInfo = ({ info, cast, video }) => {
  const videoRef = useRef();
  const [openVideo, setOpenVideo] = useState(false);

  const handleVideo = (e) => {
    if (openVideo && videoRef.current === e.target) {
      setOpenVideo(false);
    }
  };

  return (
    <MovieInfoContainer>
      <PosterContainer>
        <PosterImg
          src={
            info.poster_path
              ? `http://image.tmdb.org/t/p/w500${info.poster_path}`
              : placeholder
          }
          alt="poster"
        />
      </PosterContainer>
      <InfoContainer>
        <div>
          <Title>{info.title}</Title>
          <SubTitle>{info.tagline}</SubTitle>
          <Option>
            {info.vote_average ? Number(info.vote_average).toFixed(2) : "-"}/10
          </Option>
          <Text>Release date: {info.release_date}</Text>
          <Text>{info.overview}</Text>
        </div>
        <Brake />
        <TrailerButtonContainer>
          {video.results.length > 0 && (
            <TrailerButton onClick={() => setOpenVideo(true)}>
              Watch Trailer
            </TrailerButton>
          )}
          {openVideo && (
            <Iframe
              id={video.results[0].key}
              videoRef={videoRef}
              handleVideo={handleVideo}
            />
          )}
        </TrailerButtonContainer>
        <Brake />
        <Option>Genres</Option>
        <GenresList>
          {info.genres &&
            info.genres.map((x) => {
              return <GenresItem key={`genre-${x.id}`}>{x.name}</GenresItem>;
            })}
        </GenresList>
        <Brake />
        <Option>Cast</Option>
        <CastContainer>
          <CastList data={cast} />
        </CastContainer>
      </InfoContainer>
    </MovieInfoContainer>
  );
};

MovieInfo.propTypes = {
  info: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),

  video: PropTypes.object,
  cast: PropTypes.object,
};

export default MovieInfo;
