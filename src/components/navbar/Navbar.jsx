import './Navbar.css'
import MenuIcon from '../../assets/menu.png'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search.png'
import UploadIcon from '../../assets/upload.png'
import NotificationIcon from '../../assets/notification.png'
import ProfileIcon from '../../assets/user_profile.jpg'


const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={() => setSidebar(prev => prev === false ? true : false)} src={MenuIcon} alt="" />
        <img className='logo' src={Logo} alt="" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">

          <input type="text" placeholder='Search' />
          <img src={SearchIcon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={UploadIcon} alt="" />
        <img src={NotificationIcon} alt="" />
        <img src={ProfileIcon} className='user-icon' alt="" />
      </div>
    </nav>
  )
}

export default Navbar
