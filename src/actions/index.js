import tmdbAPI from '../api/tmdb'
import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_GENRES,
  FETCH_GENRES_ERROR,
  SELECT_GENRES,
  SELECT_SORT,
  FETCH_MOVIE_BEGIN,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
} from './types'

// fetching static genre infos
export const fetchGenres = () => dispatch => {
  return tmdbAPI.get('/genre/movie/list')
    .then(res => {
      const data = res.data.genres.map(genre => {
        return genre = { ...genre, selected: false }
      })
      dispatch({
        type: FETCH_GENRES,
        payload: data
      })
    }).catch(error => {
      dispatch({
        type: FETCH_GENRES_ERROR,
        payload: error.message
      })
    })
}

// fetching movies
export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN
})


export const fetchMovies = (page = 1) => {
  return (dispatch, getState) => {
    dispatch(fetchMoviesBegin())
    let params = {}
    const sort = getState().options.sortBy
    const genres = getState().options.genres

    const selectedSort = sort.find(el => el.selected === true)

    const selectedGenres = genres
      .filter(genre => genre.selected === true)
      .map(el => el.id)

    if (selectedGenres.length > 0 && !selectedGenres.includes(9999)) {
      params = {
        with_genres: selectedGenres.join(','),
        sort_by: selectedSort.query,
        page: page
      }
    } else {
      params = {
        sort_by: selectedSort.query,
        page: page
      }
    }

    return tmdbAPI.get('/discover/movie', { params })
      .then(res => {
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: res.data
        })
      }).catch(error => {
        dispatch({
          type: FETCH_MOVIES_ERROR,
          payload: error.message
        })
      })
  }
}


export const selectSort = sortQuery => dispatch => {
  dispatch({
    type: SELECT_SORT,
    payload: sortQuery
  })

  dispatch(fetchMovies())
}

export const selectGenres = genreId => dispatch => {
  dispatch({
    type: SELECT_GENRES,
    payload: genreId
  })

  dispatch(fetchMovies())
}

export const fetchMovieBegin = () => ({
  type: FETCH_MOVIE_BEGIN
})

export const fetchMovieSuccess = (info, people) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: {
    info: info.data,
    people: people.data
  }
})

export const fetchMovieError = (error) => ({
  type: FETCH_MOVIE_ERROR,
  payload: error.message
})

// main action
export const fetchMovie = (movieId) => {
  return async (dispatch) => {
    dispatch(fetchMovieBegin())
    const infoPromise = await tmdbAPI.get(`/movie/${movieId}`)
    const peoplePromise = await tmdbAPI.get(`/movie/${movieId}/credits`)
    await Promise.all([infoPromise, peoplePromise])
      .then(([info, people]) => dispatch(fetchMovieSuccess(info, people)))
      .catch(error => dispatch(fetchMovieError(error)))
  }
}
