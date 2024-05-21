import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Use Routes instead of Route
import './App.css';
import './config.css';
// Import other components/pages
import AnotherPage from './ViewPages/Page2';
import Page1 from './ViewPages/Page1';
import Page2 from './ViewPages/Page2';
import Login from './ViewPages/Login';
import SideBar from './Components/SideBar/SideBar';
export const Context = React.createContext();
function App() {
  const [Auth, setAuth] = useState(false);
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
            </Routes>
          </div>
        </Router>
      ) : (
        // <Login />
        <PlansComponent/>
      )}

    </Context.Provider>
  );
}

export default App;

{/* <div className="routes"> */ }
{/* </div> */ }


