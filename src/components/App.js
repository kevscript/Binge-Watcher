import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Movies from './Movies'
import Movie from './Movie'
import Sidebar from './Sidebar'

const Container = styled.div`
  display: flex;
`

const SidebarContainer = styled.div`
  padding-left: 20px;
  height: 100vh;
  overflow-y: scroll;
  width: 200px;
  overflow-x: hidden;
  position: fixed;
`

const MainContainer = styled.div`
  width: calc(100% - 200px);
  margin-left: 200px;
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
          <Route exact path='/movies' component={Movies} />
          <Route path='/movies/:id' component={Movie} />
        </Switch>
      </MainContainer>
    </Container>
  )
}



export default withRouter(App)