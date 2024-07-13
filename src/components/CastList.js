import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import placeholder from "../assets/placeholder.png";
import PropTypes from "prop-types";

const CastContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const CastItem = styled.li`
  position: relative;
  width: auto;
`;

const AvatarLink = styled(Link)`
  position: relative;
  width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
`;

const AvatarImg = styled.img`
  display: block;
  width: 45px;
  height: auto;
`;

const CastList = ({ data }) => {
  return (
    <CastContainer>
      {data.cast &&
        data.cast.map((info) => {
          return (
            <CastItem key={`cast_${info.id}`} title={info.name}>
              <AvatarLink to={`/profile/${info.id}`} data-id={info.id}>
                <AvatarImg
                  src={
                    info.profile_path
                      ? `http://image.tmdb.org/t/p/w185${info.profile_path}`
                      : placeholder
                  }
                  alt=""
                />
              </AvatarLink>
            </CastItem>
          );
        })}
    </CastContainer>
  );
};

CastList.propTypes = {
  data: PropTypes.shape({
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_path: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  }),
};

export default CastList;
