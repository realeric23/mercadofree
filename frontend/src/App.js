import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      {/* <Header />
      <main classNameName="py-2">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer /> */}

      <Navbar />

      <Header />

      <Footer />
    </>
  );
};

export default App;
