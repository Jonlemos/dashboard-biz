import React, {Suspense, lazy, useContext} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import {AuthContext} from './contexts/auth'

import { LOGIN, MAIN } from './routes'

const Login = lazy(() => import('./pages/login'))
const Main = lazy(() => import('./pages/main'))

const App =() => {

  const { userInfo, } = useContext(AuthContext)

  const { isUserLoggedIn } = userInfo
  if (!isUserLoggedIn && window.location.pathname !== MAIN) {
    return <Redirect to={MAIN} />
  }
  return (
    <Suspense fallback ={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login}/>
        <Route path={MAIN} component={Main}/>
      </Switch>
    </Suspense>
  );
}

export default App;
