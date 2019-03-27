import tmdbAPI from '../api/tmdb'
import { FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from './types'



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
    }).then(({data}) => {
      dispatch(fetchMoviesSuccess(data))
      return data
    }).catch(error => {
      dispatch(fetchMoviesError(error))
    })
  }
}