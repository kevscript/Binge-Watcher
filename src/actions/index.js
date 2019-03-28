import tmdbAPI from '../api/tmdb'
import { 
  FETCH_MOVIES_BEGIN, 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIES_ERROR, 
  FETCH_GENRES, 
  FETCH_GENRES_ERROR 
} from './types'



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
  return dispatch => {
    dispatch(fetchMoviesBegin())

    return tmdbAPI.get('/discover/movie', {
      params: {
        language: 'en-US',
        sort_by: 'popularity.desc',
        page
      }
    }).then(res => {
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