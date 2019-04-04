import { FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../actions/types'

export default (state = { loading: true }, action) => {
  switch (action.type) {
  case FETCH_MOVIES_BEGIN:
    return {
      loading: true
    }

  case FETCH_MOVIES_SUCCESS:
    return {
      loading: false,
      ...action.payload
    }

  case FETCH_MOVIES_ERROR:
    return {
      loading: false,
      error: action.payload
    }

  default:
    return state
  }
}