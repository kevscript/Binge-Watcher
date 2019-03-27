import { FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../actions/types'

const initialState = {
  data: [],
  error: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case FETCH_MOVIES_BEGIN:
    return {
      ...state,
      loading: true
    }

  case FETCH_MOVIES_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload
    }

  case FETCH_MOVIES_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload.error
    }

  default:
    return state
  }
}