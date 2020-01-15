import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header.js'
import Cat from "../screens/Cat";
import Dog from "../screens/Dog"


export default () => (
  <Router>
    <Header />
    <Route path="/cat" component={Cat} />
    <Route path="/dog" component={Dog} />
  </Router>
)
