import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProfile } from '../actions'
import placeholder from '../assets/placeholder.png'
import Spinner from '../components/Spinner'
import MoviesList from '../components/MoviesList'
import styled from 'styled-components'

const ProfilePageContainer = styled.div`
  width: 90%;
  margin: 0 auto
`


const ProfilePage = ({ profile, fetchProfile, match }) => {
  const { info, starring, loading } = profile


  useEffect(() => {
    fetchProfile(match.params.id)
  }, [])

  if (loading) {
    return (
      <Spinner size={100} loading={loading} />
    )
  } else {
    return (
      <ProfilePageContainer>
        <h1>{info.name}</h1>
        <div>
          <img src={info.profile_path ? `http://image.tmdb.org/t/p/w185${info.profile_path}` : placeholder} alt={info.name} />
        </div>
        <p>{info.birthday}</p>
        <p>{info.biography}</p>
        <h3>Also starred in</h3>
        <MoviesList data={starring.cast} />
      </ProfilePageContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile
})

const mapDispatchToProps = {
  fetchProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)