import { FETCH_MOVIE_BEGIN, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR } from '../actions/types'

export default (state = { loading: true }, action) => {
  switch (action.type) {
  case FETCH_MOVIE_BEGIN:
    return {
      loading: true
    }

  case FETCH_MOVIE_SUCCESS:
    return {
      loading: false,
      info: { ...action.payload.info },
      people: { ...action.payload.people },
      recommend: { ...action.payload.recommend },
      video: { ...action.payload.video }
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