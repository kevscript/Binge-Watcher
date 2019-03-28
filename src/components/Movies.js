import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'

const Movies = ({ movies, fetchMovies }) => {

  const { page, total_pages, results, total_results, error, loading } = movies

  useEffect(() => {
    fetchMovies()
  }, [])

  if (loading === true) {
    return <h1>Loading</h1>
  } else if (error) {
    return <h1>{error}</h1>
  } else {
    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h3>page: {page}</h3>
          <h3>total pages: {total_pages}</h3>
          <h3>total results: {total_results}</h3>
          <button onClick={() => page > 1 ? fetchMovies(page - 1) : null}>prev page</button>
          <button onClick={() => fetchMovies(page + 1)}>next page</button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%', margin: '0 auto' }}>
          {results && results.map(movie => {
            return (
              <div key={movie.id} style={{ width: '280px', borderRadius: '10px', margin: '15px', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
                <div style={{ position: 'relative', height: 'calc(100% - 100px)', overflow: 'hidden', borderRadius: '10px 10px 0 0' }}>
                  <img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt='movie poster' style={{ display: 'block', width: '100%', height: 'auto', margin: 'auto' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                  <h3 style={{ textAlign: 'center', width: '80%', fontSize: '16px' }}>{movie.title}</h3>
                  <p>rating: {movie.vote_average}</p>
                  <p>{movie.release_date}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = {
  fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)