// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Formulario from './components/clientes/Formulario';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div className="App" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;