import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Tabs/Home.js';
import Store from './Tabs/Store.js'
import Contact from './Tabs/Contact.js'
import Notices from './Tabs/Notices.js'
import Login from './Tabs/Login.js'
import NotFound from './Tabs/NotFound.js';
import MyNav from './MyNav.js';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
        <MyNav/>
        <Routes>
            <Route path = "/" element={<Home/>} />
            <Route path = "/store" element={<Store/>} />
            <Route path = "/contact" element={<Contact/>} />
            <Route path = "/notices" element={<Notices/>} />
            <Route path = "/login" element={<Login/>} />
            <Route path = "*" element={<NotFound/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
