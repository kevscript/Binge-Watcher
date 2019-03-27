import React from 'react'
import { Route, NavLink, Switch, withRouter } from 'react-router-dom'
import Movies from './Movies'

const App = () => {
  return (
    <div>
      <header>
        <h1>Hi from App Header</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </header>
      <Switch>
        <Route path='/movies' render={() => <Movies />} />
      </Switch>
    </div>
  )
}


export default withRouter(App)