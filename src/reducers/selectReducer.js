import { SELECT_GENRES, SELECT_SORT } from '../actions/types'

const initialState = {
  genres: [],
  sort: 'popularity.desc',
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SELECT_SORT:
    return {
      ...state,
      sort: action.payload
    }

  case SELECT_GENRES:
    const match = state.genres.find(el => el === action.payload)

    if (match) {
      const newGenres = state.genres.filter(el => el !== action.payload)

      return {
        ...state,
        genres: [...newGenres]
      }
    } else {
      return {
        ...state,
        genres: [
          ...state.genres,
          action.payload
        ]
      }
    }

  default:
    return state

  }
}