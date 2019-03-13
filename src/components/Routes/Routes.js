import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from 'pages/Login'
import Home from 'pages/Home'
import User from 'pages/User'
import NotFound from 'pages/NotFound'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/(||login)/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/user" component={User} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
)
