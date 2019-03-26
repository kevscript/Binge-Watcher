import React, { useEffect, useState } from 'react'
import tmdbAPI from '../api/tmdb'

const App = () => {

  const [movie, setMovie] = useState({})

  const getData = async (url, setData) => {
    const res = await tmdbAPI.get(url)
    setData(res.data)
  }

  useEffect(() => {
    getData('/movie/550', setMovie)
  }, [])

  return (
    <div>
      <h1>hi from App</h1>
      <h1>{movie.budget}</h1>

    </div>
  )
}

export default App