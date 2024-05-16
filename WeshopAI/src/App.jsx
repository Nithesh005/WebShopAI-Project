import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Use Routes instead of Route
import './App.css';
import './config.css';
// Import other components/pages
import Page1 from './ViewPages/Page1';
import Page2 from './ViewPages/Page2';
import Login from './ViewPages/Login';
import SideBar from './Components/SideBar/SideBar';
import PurchasingPage from './ViewPages/PurchasingPage';
export const Context = React.createContext();
function App() {
  const [Auth, setAuth] = useState(true);
  return (
    <Context.Provider className="App" value={[Auth, setAuth]}>
      {Auth ? (
        <Router>
          <div className='main'>
            <SideBar />
            <Routes>
              <Route path="/" element={<Page1 />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/Purchase" element={<PurchasingPage />} />
            </Routes>
          </div>
        </Router>
      ) : (
        <Login />
      )}

    </Context.Provider>
  );
}

export default App;


