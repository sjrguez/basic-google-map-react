import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import GoogleApiWrapper from './components/maps';

function App() {
  return (
    <Container>
      <GoogleApiWrapper />
    </Container>
  );
}

export default App;
