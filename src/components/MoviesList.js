import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import placeholder from "../assets/placeholder.png";
import PropTypes from "prop-types";

const MoviesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

const MoviesListItem = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  width: 250px;
  border-radius: 0.5rem;
  margin: 25px 10px;
  transition: all 0.3s;

  :hover {
    transform: scale(1.05);
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23);
  }

  @media (max-width: 1024px) {
    width: 200px;
    transition: all 0.3s;
  }
`;

const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

const MoviePosterContainer = styled.div`
  position: relative;
  height: calc(100% - 100px);
  overflow: hidden;
  border-radius: 10px 10px 0 0;

  @media (max-width: 1024px) {
    height: calc(100% - 80px);
  }
`;

const MoviePoster = styled.img`
  display: block;
  width: 100%;
  min-height: 100%;
  margin: auto;
`;

const MovieSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 0.5rem;
  background-color: rgb(255, 255, 255);

  @media (max-width: 1024px) {
    height: 80px;
  }
`;

const MovieSubTitle = styled.span`
  width: 90%;
  font-size: 16px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

const MovieRating = styled(MovieSubTitle)`
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
`;

const MovieDate = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 12px;
  z-index: 5;
  background: rgba(255, 255, 255, 0.75);
  padding: 4px;
  border-radius: 6px;
`;

const MoviesList = ({ data }) => {
  return (
    <MoviesListContainer>
      {data &&
        data.map((movie) => {
          return (
            <MoviesListItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} data-id={movie.id}>
                <MoviePosterContainer>
                  <MoviePoster
                    src={
                      movie.poster_path !== null
                        ? `http://image.tmdb.org/t/p/w342${movie.poster_path}`
                        : placeholder
                    }
                    alt="movie poster"
                  />
                </MoviePosterContainer>
                <MovieSubContainer>
                  <MovieSubTitle>{movie.title}</MovieSubTitle>
                  <MovieDate>
                    {movie.release_date && <span>{movie.release_date}</span>}
                  </MovieDate>
                  <MovieRating>
                    {movie.vote_average
                      ? Number(movie.vote_average).toFixed(2)
                      : "-"}
                  </MovieRating>
                </MovieSubContainer>
              </MovieLink>
            </MoviesListItem>
          );
        })}
    </MoviesListContainer>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
