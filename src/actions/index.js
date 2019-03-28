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
      dispatch({
        type: FETCH_GENRES,
        payload: res.data.genres
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
    const sort = getState().select.sort
    const genres = getState().select.genres

    if (genres.length > 0) {
      params = {
        with_genres: genres.join(','),
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


export const selectSort = (sort) => ({
  type: SELECT_SORT,
  payload: sort
})

export const selectGenres = (genre) => ({
  type: SELECT_GENRES,
  payload: genre
})
