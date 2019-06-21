import Navbar from './Navbar'
import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
const Home = lazy(() => import('./Home'))
const Dashboard = lazy(() => import('./Dashboard'))

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Suspense>
    </>
  )
}

export default App
