import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Use Routes instead of Route
import './App.css';
import './config.css';
import logo from './assets/Images/logo.png';
import sidebarOptions from './MappingArrays/SideBarOption'
// Import other components/pages
import AnotherPage from './ViewPages/Page2';
import Page1 from './ViewPages/Page1';
import Page2 from './ViewPages/Page2';

function App() {
  return (
    <Router>
      <div className='main'>
        <div className="sidebar">
          <div className="innercontent">
            <img src={logo} alt="Logo" />
            <nav>
              <ul className='ul'>
                {sidebarOptions.map((option, index) => (
                  <Link key={index} to={option.navigatePath}>
                    <li className='li df alc gap10'>
                      <img src={option.imagePath} alt={option.name} />
                      <span>{option.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="routes">
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


