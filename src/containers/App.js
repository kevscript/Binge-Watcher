import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import MoviesPage from './MoviesPage'
import MoviePage from './MoviePage'
import ProfilePage from './ProfilePage'
import SearchPage from './SearchPage'
import Sidebar from '../components/Sidebar'
import Searchbar from '../components/Searchbar'

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
`

const MainContainer = styled.div`
  width: calc(100% - 300px);
  margin-left: 300px;
`

const App = () => {
  return (
    <Container>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <MainContainer>
        <Searchbar />
        <Switch>
          <Route exact path='/' render={() => (
            <Redirect from='/' to='/movies' />
          )} />
          <Route exact path='/movies' component={MoviesPage} />
          <Route path='/movies/:id' component={(props) => <MoviePage timestamp={new Date().toString()} {...props} />} />
          <Route path='/profile/:id' component={ProfilePage} />
          <Route path='/search/:value' component={SearchPage} />
        </Switch>
      </MainContainer>
    </Container>
  )
}

export default withRouter(App)