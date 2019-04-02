import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import movieReducer from './movieReducer'
import optionsReducer from './optionsReducer'

export default combineReducers({ 
  movies: moviesReducer,
  movie: movieReducer,
  options: optionsReducer,
})