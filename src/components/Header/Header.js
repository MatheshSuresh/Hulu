import {
    Home,
    LiveTv,
    PersonOutline,
    Search,
    VideoLibrary,
    FlashOn
} from '@mui/icons-material'
import './Header.css'
import Logo from '../../assets/image/logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className='header-icons'>
                <div className='header-icon'>
                    <Home />
                    <p>Home</p>
                </div>
                <div className='header-icon'>
                    <FlashOn />
                    <p>Trending</p>
                </div>
                <div className='header-icon'>
                    <LiveTv />
                    <p>Verified</p>
                </div>
                <div className='header-icon'>
                    <VideoLibrary />
                    <p>Collections</p>
                </div>
                <div className='header-icon'>
                    <Search />
                    <p>Search</p>
                </div>
                <div className='header-icon'>
                    <PersonOutline />
                    <p>Profile</p>
                </div>
            </div>
            <img src={Logo} alt='Hulu Logo'/>
        </div>
    )
}

export default Header
