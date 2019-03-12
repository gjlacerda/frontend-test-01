import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from 'pages/Login'
import Home from 'pages/Home'
import User from 'pages/User'
import NotFound from 'pages/NotFound'

export default () => (
  <HashRouter>
    <Switch>
      <Route path="/(||login)/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/user" component={User} />
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
)
