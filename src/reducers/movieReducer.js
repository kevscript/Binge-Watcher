import { FETCH_MOVIE_BEGIN, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR } from '../actions/types'

export default (state = { loading: false }, action) => {
  switch (action.type) {
  case FETCH_MOVIE_BEGIN:
    return {
      loading: true
    }

  case FETCH_MOVIE_SUCCESS:
    return {
      loading: false,
      ...action.payload
    }

  case FETCH_MOVIE_ERROR:
    return {
      loading: false,
      error: action.payload
    }

  default:
    return state
  }
}