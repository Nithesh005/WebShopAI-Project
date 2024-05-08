import { Route, Router, Routes } from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar";
import Page1 from "./Page1";
import Page2 from "./Page2";

const HomePage = () => {
    return (
        <Router>
            <div className='main'>
                <SideBar />
                <Routes>
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                </Routes>
            </div>
        </Router>
    )
}

export default HomePage;