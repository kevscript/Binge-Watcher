import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import genresReducer from './genresReducer'
import selectReducer from './selectReducer'

export default combineReducers({ 
  movies: moviesReducer,
  genres: genresReducer,
  select: selectReducer
})