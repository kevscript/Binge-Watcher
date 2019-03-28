import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Movies from './Movies'
import Sidebar from './Sidebar'


const App = () => {
  return (
    <div style={{display: 'flex', width: '100%'}}>
      <div style={{width: '10%'}}>
        <Sidebar />
      </div>

      <div style={{width: '90%'}}>
        <Switch>
          <Route exact path='/' render={() => (
            <Redirect from='/' to='/movies' />
          )} />
          <Route path='/movies' render={() => <Movies />} />
        </Switch>
      </div>
    </div>
  )
}



export default withRouter(App)