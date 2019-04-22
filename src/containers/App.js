import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import MoviesPage from './MoviesPage'
import MoviePage from './MoviePage'
import ProfilePage from './ProfilePage'
import SearchPage from './SearchPage'
import Sidebar from '../components/Sidebar'

const Container = styled.div`
  display: flex;
`

const SidebarContainer = styled.div`
  padding-left: 50px;
  height: 100vh;
  overflow-y: scroll;
  width: 300px;
  overflow-x: hidden;
  position: fixed;
  left 0;
  transition: all 0.5s;

  @media (max-width: 1000px) {
    left: -300px;
    transition: all 0.5s;
  }
`

const MainContainer = styled.div`
  width: calc(100% - 300px);
  margin-left: 300px;
  transition: all 0.5s;

  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 0;
    transition: all 0.5s;
  }
`

const App = () => {
  return (
    <Container>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <MainContainer>
        <Switch>
          <Route exact path='/' render={() => (
            <Redirect from='/' to='/movies' />
          )} />
          <Route exact path='/movies' component={MoviesPage} />
          <Route path='/movies/:id' component={(props) => <MoviePage timestamp={new Date().toString()} {...props} />} />
          <Route path='/profile/:id' component={ProfilePage} />
          <Route path='/search/:value' component={(props) => <SearchPage timestamp={new Date().toString()} {...props} />} />
        </Switch>
      </MainContainer>
    </Container>
  )
}

export default withRouter(App)