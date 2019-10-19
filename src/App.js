import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Error from './components/Error';
import Navigation from './components/Navigation';
import './css/styles.min.css';

function App() {
  return (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/Products" component={Products} />
      <Route path="/Contact" component={Contact} />

      <Route component={Error} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
