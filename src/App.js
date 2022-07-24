import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Footer from './views/Footer';
import Home from '../src/components/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
 
function App() {
  return (
    <Container>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
