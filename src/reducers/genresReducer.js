import { FETCH_GENRES, FETCH_GENRES_ERROR } from '../actions/types'

export default (state = {}, action) => {
  if (action.type === FETCH_GENRES) {
    return {
      ...action.payload
    }
  } else if (action.type === FETCH_GENRES_ERROR) {
    return {
      error: action.payload
    }
  } else {
    return state
  }
}