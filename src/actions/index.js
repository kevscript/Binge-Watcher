import tmdbAPI from '../api/tmdb'
import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_GENRES,
  FETCH_GENRES_ERROR,
  SELECT_GENRES,
  SELECT_SORT
} from './types'

// fetching static genre infos
export const fetchGenres = () => dispatch => {
  return tmdbAPI.get('/genre/movie/list')
    .then(res => {
      const data = res.data.genres.map(genre => {
        return genre = { ...genre, selected: false}
      })
      dispatch({
        type: FETCH_GENRES,
        payload: data
      })
    }).catch(error => {
      dispatch({
        type: FETCH_GENRES_ERROR,
        payload: error.message
      })
    })
}

// fetching movies
export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN
})

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies }
})

export const fetchMoviesError = error => ({
  type: FETCH_MOVIES_ERROR,
  payload: { error }
})

export const fetchMovies = (page = 1) => {
  return (dispatch, getState) => {
    dispatch(fetchMoviesBegin())
    let params = {}
    const sort = getState().options.sort
    const genres = getState().options.genres

    const selectedGenres = genres
      .filter(genre => genre.selected === true)
      .map(el => el.id)

    if (selectedGenres.length > 0 && !selectedGenres.includes(9999)) {
      params = {
        with_genres: selectedGenres.join(','),
        sort_by: sort,
        page: page
      }
    } else {
      params = {
        sort_by: sort,
        page: page
      }
    }

    return tmdbAPI.get('/discover/movie', { params })
      .then(res => {
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: res.data
        })
      }).catch(error => {
        dispatch({
          type: FETCH_MOVIES_ERROR,
          payload: error.message
        })
      })
  }
}


export const selectSort = (sort) => dispatch => {
  dispatch({
    type: SELECT_SORT,
    payload: sort 
  })

  dispatch(fetchMovies())
}

export const selectGenres = (genreId) => dispatch => {
  dispatch({
    type: SELECT_GENRES,
    payload: genreId
  })

  dispatch(fetchMovies())
}
