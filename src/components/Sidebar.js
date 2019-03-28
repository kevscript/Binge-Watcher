import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchGenres } from '../actions'

const Sidebar = ({ fetchGenres, genres }) => {

  useEffect(() => {
    fetchGenres()
  }, [])


  return (
    <div>
      {genres && Object.keys(genres).map(i => {
        return <p key={genres[i].id}>{genres[i].name}</p>
      })}
    </div>
  )
}

const mapStateToProps = state => ({
  genres: state.genres
})

const mapDispatchToProps = {
  fetchGenres
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)