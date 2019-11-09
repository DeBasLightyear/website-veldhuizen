import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Error from './Pages/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './css/styles.min.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Products" component={Products} />
          <Route path="/Contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
