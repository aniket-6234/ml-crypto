import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../images/home.svg';
import CryptoIcon from '../images/crypto.svg';
import NewsIcon from '../images/news.svg';
import AboutIcon from '../images/about.svg';

const BottomNavbar = () => {


  return (
    <div className="z-40 flex items-center justify-around bg-[#f0eded] fixed bottom-0 left-0 right-0 h-[55px] lg:hidden shadow-sm">
      
        <Link to="/">
          <img src={HomeIcon} alt="home" />
        </Link>
     
      
        <Link to="/dashboard">
        <img src={CryptoIcon} alt="crypto" />
        </Link>
    
    
        <Link to="/crypto">
        <img src={NewsIcon} alt="news" />
        </Link>
     
    
        <Link to="/news">
        <img src={AboutIcon} alt="about" />
        </Link>
      
    </div>
  )
}

export default BottomNavbar;