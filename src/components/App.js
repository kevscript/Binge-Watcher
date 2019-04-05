import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Movies from './Movies'
import Movie from './Movie'
import Sidebar from './Sidebar'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

const SidebarContainer = styled.div`
  width: 200px;
  padding-left: 20px;
  overflow-y: scroll;
`

const MainContainer = styled.div`
  overflow-y: scroll;
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