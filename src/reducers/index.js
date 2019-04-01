import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import optionsReducer from './optionsReducer'

export default combineReducers({ 
  movies: moviesReducer,
  options: optionsReducer,
})