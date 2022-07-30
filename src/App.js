import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './views/Footer';
import SingleTable from './components/SingleTable';
import TableForm from './views/TableForm';
import Home from '../src/components/Home';
import Header from '../src/views/Header';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import { fetchStatus } from './redux/statusRedux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
 
function App() {
  const dispatch = useDispatch();
  useEffect(()=>dispatch(fetchStatus()), []);
  
  return (
    <Container>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<TableForm/>}/>
          <Route path="/table/:tableId" element={<SingleTable/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </Container>
  )
};

export default App;
