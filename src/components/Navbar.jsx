import {Link} from 'react-router-dom'
import { SearchBar } from './index'
import  youtubeNameAndLogo  from "../assets/youtubeNameAndLogo.png"
function Navbar() {
  return (
    <header className='h-[50px] bg-black md:h-[80px] flex items-center  sticky top-0 justify-between'>
        <Link to={''}>
          <img src={youtubeNameAndLogo} alt="logo" className='h-[45px]' />
        </Link>

        <SearchBar/>
    </header>
  )
}

export default Navbar