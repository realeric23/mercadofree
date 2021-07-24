import React from 'react';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/api/search" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
