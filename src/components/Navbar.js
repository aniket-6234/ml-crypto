import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CryptoLogo from "../images/crypto-icon.svg";
import GitHubIcon from "../images/github.svg";
import BottomNavbar from "./BottomNavbar";

const navbarData = [
  {
    id: 1,
    title: "Home",
    slug: "/",
    is_selected: true,
  },
  {
    id: 2,
    title: "Dashboard",
    slug: "/dashboard",
    is_selected: false,
  },
  {
    id: 3,
    title: "Crypto",
    slug: "/crypto",
    is_selected: false,
  },
  {
    id: 4,
    title: "News",
    slug: "/news",
    is_selected: false,
  },
];

const Navbar = () => {
  const [navItems, setNavItems] = useState(navbarData);
  let location = useLocation();

  useEffect(() => {
    let path = location.pathname;
    const updatedNavItems = navItems.map((item) => {
      if (path === item.slug) item.is_selected = true;
      else item.is_selected = false;
      return item;
    });
    setNavItems(updatedNavItems);
  }, [location]);

  const toggleNavItem = (id) => {
    const updateNavItems = navItems.map((nav) => {
      return {
        ...nav,
        is_selected: nav.id === id,
      };
    });
    setNavItems(updateNavItems);
  };

  return (
    <div>
      <nav className="z-40 navbar shadow-sm px-4 lg:px-24">
        <Link to="/">
          <div className="flex items-center cursor-pointer">
            <div className="w-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM6.49896 9.97089L11 12.5768V17.6252H13V12.5768L17.501 9.9709L16.499 8.24005L12 10.8447L7.50104 8.24004L6.49896 9.97089Z"
                  fill="rgba(91,88,241,1)"
                ></path>
              </svg>
            </div>
            <h2 className="ml-2 logo-head">
              Crypto <span className="verse-spell">Verse</span>
            </h2>
          </div>
        </Link>
        <div className="nav-item">
          {navItems.map((item) => (
            <Link to={item.slug} key={item.id}>
              <p
                onClick={() => toggleNavItem(item.id)}
                className={item.is_selected ? "nav-link-selected" : "nav-link"}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>
        <div>
          <a
            href="https://github.com/aniket-6234/Crypto-Verse-3.0"
            target="_blank"
          >
            <div className="btn-github shadow-sm">
              <div className="git-icon">
                <img className="w-4" src={GitHubIcon} alt="github" />
              </div>
              <p className="ml-2">GitHub Repo</p>
            </div>
          </a>
        </div>
      </nav>

      <BottomNavbar />
    </div>
  );
};

export default Navbar;
