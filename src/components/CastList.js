import React from 'react'
import { Link } from 'react-router-dom' 
import styled from 'styled-components'
import placeholder from '../assets/placeholder.png'

const CastContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 20%;
`

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

const CastList = ({data}) => {

  return (
    <CastContainer>
      {data.cast && data.cast.map(x => {
        return (
          <li key={`cast_${x.id}`}>
            <AvatarLink to={`/profile/${x.id}`} data-id={x.id}>
              <AvatarImg src={x.profile_path ? `http://image.tmdb.org/t/p/w185${x.profile_path}` : placeholder} alt='' />
            </AvatarLink>
          </li>
        )
      })}
    </CastContainer>
  )
}

export default CastList