import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />

        <Header />

        <Footer />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
