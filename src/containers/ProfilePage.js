import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProfile } from '../actions'
import placeholder from '../assets/placeholder.png'

const ProfilePage = ({ profile, fetchProfile, match }) => {
  const { name, birthday, biography, profile_path } = profile

  useEffect(() => {
    fetchProfile(match.params.id)
  }, [])

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <img src={profile_path ? `http://image.tmdb.org/t/p/w185${profile_path}` : placeholder} alt={name} />
      </div>
      <p>{name}</p>
      <p>{birthday}</p>
      <p>{biography}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  profile: state.profile
})

const mapDispatchToProps = {
  fetchProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)