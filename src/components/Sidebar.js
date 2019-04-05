import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchGenres, selectSort, selectGenres } from '../actions'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const ListContainer = styled.div`
  margin-top: 30px;
`

const OptionTitle = styled.h3`
  text-transform: uppercase;
  line-height: 3;
  color: blue;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const ListItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: ${props => props.selected ? 800 : 400};
  line-height: 2;
`

const Sidebar = ({ fetchGenres, options, selectGenres, selectSort }) => {

  const { genres, sortBy } = options

  useEffect(() => {
    fetchGenres()
  }, [])

  const handleSortSelection = (e) => {
    if (e.target.getAttribute('data-type') === 'sort') {
      selectSort(e.target.getAttribute('data-query'))
    }
  }

  const handleGenresSelection = (e) => {
    if (e.target.getAttribute('data-type') === 'genre') {
      selectGenres(e.target.getAttribute('data-query'))
    }
  }

  return (
    <Container>
      <ListContainer>
        <OptionTitle>Sort By</OptionTitle>
        <List>
          {sortBy && sortBy.map(el => {
            return (
              <ListItem
                to='/movies'
                key={el.query}
                data-query={el.query}
                data-type='sort'
                onClick={handleSortSelection}
                selected={el.selected}
              >
                {el.name}
              </ListItem>
            )
          })}
        </List>
      </ListContainer>
      <ListContainer>
        <OptionTitle>Genres</OptionTitle>
        <List>
          {genres && Object.keys(genres).map(i => {
            return (
              <ListItem 
                to='/movies'
                selected={genres[i].selected}
                key={genres[i].id}
                data-query={genres[i].id}
                data-type='genre'
                onClick={handleGenresSelection}
              >
                {genres[i].name}
              </ListItem>
            )
          })}
        </List>
      </ListContainer>
    </Container>
  )
}

const mapStateToProps = state => ({
  options: state.options
})

const mapDispatchToProps = {
  fetchGenres,
  selectSort,
  selectGenres,
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)