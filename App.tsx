
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Academy from './pages/Academy';
import Logistics from './pages/Logistics';
import Lifestyle from './pages/Lifestyle';
import ContactBookings from './pages/ContactBookings';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/contact" element={<ContactBookings />} />
          <Route path="/bookings" element={<ContactBookings />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
