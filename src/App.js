import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import './css/styles.min.css';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img className="App-logo" alt="logo" />
        </Link>
        <h1 className="App-title">Welcome to React</h1>
        <Link to="/">Home</Link> <Link to="/post/">Post</Link>
      </header>
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route path="/post/" component={Post} /> */}
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
