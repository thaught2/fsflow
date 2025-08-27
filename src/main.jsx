import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App'; // optional if using <App />
import AdminRequestForm from './pages/form';
import Login from './pages/login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<AdminRequestForm />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);
