import React from "react";
import { Link } from "react-router-dom";
import CryptoLogo from "../images/crypto-icon.svg";
import GitHubIcon from "../images/github.svg";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
  return (
    <div>
      <nav className="z-40 navbar shadow-sm px-4 lg:px-24">
        <Link to="/">
          <div className="flex items-center cursor-pointer">
            <img className="w-5" src={CryptoLogo} alt="logo" />
            <h2 className="ml-2 logo-head">
              Crypto <span className="verse-spell">Verse</span>
            </h2>
          </div>
        </Link>
        <div className="nav-item">
          <Link to="/">
            <p className="nav-link">Home</p>
          </Link>
          <Link to="/dashboard">
            <p className="nav-link">Dashboard</p>
          </Link>
          <Link to="/crypto">
            <p className="nav-link">Crypto</p>
          </Link>
          <Link to="/news">
            <p className="nav-link">News</p>
          </Link>
        </div>
        <a
          href="https://github.com/aniket-6234/Crypto-Verse-3.0"
          target="_blank"
        >
          <div className="btn-github shadow-sm">
            <div className="git-icon">
              <img className="w-4" src={GitHubIcon} alt="github" />
            </div>
            <p className="ml-3 mt-0.5">GitHub Repo</p>
          </div>
        </a>
      </nav>

      <BottomNavbar />
    </div>
  );
};

export default Navbar;
