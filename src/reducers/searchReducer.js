import { FETCH_SEARCH_BEGIN, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_ERROR, CHANGE_SEARCH_INPUT } from '../actions/types'

export default (state = { loading: true, input: '' }, action) => {
  switch (action.type) {
  case CHANGE_SEARCH_INPUT:
    return {
      ...state,
      loading: false,
      input: action.payload
    }

  case FETCH_SEARCH_BEGIN:
    return {
      ...state,
      loading: true
    }

  case FETCH_SEARCH_SUCCESS:
    return {
      ...state,
      loading: false,
      ...action.payload
    }

  case FETCH_SEARCH_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload
    }

  default:
    return state
  }
}