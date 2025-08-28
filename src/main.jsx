// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminRequestForm from './pages/form';
import Login from './pages/login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Default page = Login */}
        <Route path="/" element={<Login />} />

        {/* Explicit login route */}
        <Route path="/login" element={<Login />} />

        {/* Admin request form route */}
        <Route path="/form" element={<AdminRequestForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
