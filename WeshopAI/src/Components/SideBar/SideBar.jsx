import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import sidebarOptions from '../../MappingArrays/SideBarOption'

const SideBar = () => {
    return (
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
    )
}
export default SideBar;