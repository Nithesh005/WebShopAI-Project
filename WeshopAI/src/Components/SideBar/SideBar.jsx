import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import sidebarOptions from '../../MappingArrays/SideBarOption'
import logs from '../../assets/Images/icon1.png'
import './style.css'
import { useState } from 'react';
const SideBar = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="sidebar">
            <div className="innercontent">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav>
                    <div className='ul'>
                        <div className="div1">
                            {sidebarOptions.map((option, index) => (
                                <Link key={index} to={option.navigatePath}>
                                    <li className={`li df alc gap10 ${index === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(index)}>
                                        <img src={option.imagePath} alt={option.name} />
                                        <span>{option.name}</span>
                                    </li>
                                </Link>
                            ))}
                        </div>
                        <div className="div2">
                            <Link to='Purchase'>
                                <li className={`li df alc gap10 ${activeIndex === 3 ? 'active' : ''}`} onClick={() => setActiveIndex(3)}>
                                    <img src={logs} alt='image' />
                                    <span>Purchase</span>
                                </li>
                            </Link>
                            <Link to='page4'>
                                <li className={`li df alc gap10 ${activeIndex === 4 ? 'active' : ''}`} onClick={() => setActiveIndex(4)}>
                                    <img src={logs} alt='image' />
                                    <span>Profile</span>
                                    <div className="additional-options">
                                        <p>UserName</p>
                                        <p>Points</p>
                                        <p>super coins</p>
                                    </div>
                                </li>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default SideBar;