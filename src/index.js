import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './Pages/MainPage';
import Form from './Pages/Form'
import './assets/Index.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


ReactDOM.render(
  

<BrowserRouter>
    <Switch>
      <Route component={MainPage} exact path="/" />
      <Route component={Form} exact path="/form" />
    </Switch>
</BrowserRouter>

,document.getElementById('root')
);
