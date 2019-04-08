import { FETCH_PROFILE_BEGIN, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_ERROR } from '../actions/types'

export default (state = { loading: true }, action) => {
  switch (action.type) {
  case FETCH_PROFILE_BEGIN:
    return {
      loading: true
    }

  case FETCH_PROFILE_SUCCESS:
    return {
      loading: false,
      ...action.payload
    }

  case FETCH_PROFILE_ERROR:
    return {
      loading: false,
      error: action.payload
    }

  default:
    return state
  }
}