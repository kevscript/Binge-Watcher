import { FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../actions/types'

const initialState = {
  page: 0,
  total_results: 0,
  total_pages: 0,
  results: [],
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
      results: action.payload.movies.results,
      page: action.payload.movies.page,
      total_results: action.payload.movies.total_results,
      total_pages: action.payload.movies.total_pages
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