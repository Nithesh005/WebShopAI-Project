import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import sidebarOptions from '../../MappingArrays/SideBarOption'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="innercontent">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav>
                    <div className='ul'>
                        <div className="div1">
                            {sidebarOptions.slice(0, -1).map((option, index) => (
                                <Link key={index} to={option.navigatePath}>
                                    <li className={`li df alc gap10 ${index === sidebarOptions.length - 1 && 'last-item'}`}>
                                        <img src={option.imagePath} alt={option.name} />
                                        <span>{option.name}</span>
                                    </li>
                                </Link>
                            ))}
                        </div>
                        <div className="div2">
                            {sidebarOptions.slice(-1).map((option, index) => (
                                <Link key={index} to={option.navigatePath}>
                                    <li className={`li df alc gap10 ${index === sidebarOptions.length - 1 && 'last-item'}`}>
                                        <img src={option.imagePath} alt={option.name} />
                                        <span>{option.name}</span>
                                    </li>
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default SideBar;