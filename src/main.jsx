// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<div>Home Page</div>} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRequestForm from './pages/form';
import Login from './pages/login';

<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/form" element={<AdminRequestForm />} />
  </Routes>
</Router>

