import React, { useState, useRef, useEffect } from "react";
import ArrowDown from "../images/arrow-down.svg";
import CryptoImage from "../images/crypto-illustration.png";
import CryptoContent from "../images/crypto-content-img.png";
import CardGif from "../images/card-gif.gif";
import TabOpen from "../images/tab-open.png";
import GreenTree from "../images/green-tree.png";
import MastercardIcon from "../images/mastercard.png";
import MotionArt from "../images/motionArt.png";
import { scrollToTopAfterPageRender } from "../utils/scrollToTop";

const Home = () => {
  const scrollBottomRef = useRef(null);
  useEffect(() => {
    scrollToTopAfterPageRender();
  }, []);

  const scrollDownPage = () => {
    window.scrollBy({
      top: 650,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#EBF0F6]">
      <div className="px-4 lg:px-24 flex flex-wrap justify-between py-8">
        <div className="content-container">
          <p className="creative-developer"># 1 Creative Developer</p>
          <h3 className="crypto-head">
            Crypto that <span id="change-text">change</span>
          </h3>
          <h3 className="crypto-head">the world. Is now</h3>
          <h3 className="crypto-head">
            <span id="change-text">changing</span> you.
          </h3>
          <p className="mt-7 lg:w-[600px] last-para">
            We need to explore the{" "}
            <span id="change-text-para">crypto currencies</span> because it is
            our future transactions where everything is going to be replace by{" "}
            <span id="change-text-para">crypto</span>.
          </p>
          <div onClick={scrollDownPage} className="btn-scroll-down">
            <p>Scroll Down</p>
            <div className="arrow-down">
              <img className="w-4" src={ArrowDown} alt="arrow-down" />
            </div>
          </div>
          <div className="float-right mt-4">
            <img
              className="w-[500px]"
              src={CryptoContent}
              alt="crypto-down-img"
            />
          </div>
        </div>
        <div className="image-container">
          <img
            className="img-crypto"
            src={CryptoImage}
            alt="crypto-illustration"
          />
        </div>
      </div>

      <div
        ref={scrollBottomRef}
        className="px-4 py-16 lg:px-24 lg:py-20 bg-[#1755FF] flex flex-wrap justify-between"
      >
        <div>
          <h2 className="discover-head">Open new tabs is sh*t</h2>
          <img className="mt-8" src={TabOpen} alt="tab-open" />
          <p className="mt-4 w-full lg:w-[500px] text-white">
            A solution to for Every Student's who are interested in the world of
            cryptocurrencies in details.
          </p>
        </div>
        <img className="" src={CardGif} alt="card-gif" />
      </div>

      <div className="px-4 py-20 lg:px-24 lg:py-48 bg-[#000000] flex flex-wrap flex-col-reverse lg:flex-row lg:justify-between">
        <div className="motion-art-div">
          <div>
            <img src={MotionArt} alt="" />
          </div>
        </div>
        <div className="motion-art-content">
          <h3 className="moscow-text">
            Moscow, Presnenskya embankment, 10 bld 2 (IQ Apartment Tower, floor
            12)
          </h3>
          <p className="contact-info mt-8">(+91) 845-927-169</p>
          <p className="contact-info">aniket.raikwar.101@gmail.com</p>
          <p className={`card-para-1`}>
            Solution for all people who want to use crypto currency for trade,
            invest, transaction, etc. (Track & trade your coin portfolio now).
          </p>
          <h1 className="change-text-3">How to get to us _</h1>
        </div>
      </div>
      <div className="bg-[#3a37cd] px-4 py-16 lg:px-24 lg:py-32 ">
        <div className="flex flex-wrap justify-between">
          <div className="green-1">
            <h1 className="text-white font-medium lg:font-semibold lg:leading-snug text-2xl lg:text-5xl w-[350px] lg:w-[550px]">
              Get & Collect all your money from Friends, Family, Store on Every
              Transactions.
            </h1>
            <p className="mt-6 lg:mt-15 font-normal lg:leading-normal text-white text-sm w-[350px] lg:text-lg lg:w-[550px] green-text">
              Crypto Verse is for all the Users and this is the emerging trend
              that can be changed the transaction history of the World.
            </p>
          </div>
          <div className="green-1">
            <img className="green-tree" src={GreenTree} alt="img" />
          </div>
        </div>
        <div>
          <p className="text-white text-sm lg:text-base font-thin lg:mt-0 mt-4 green-text">
            creator: Aniket A. Raikwar
          </p>
          <p className="text-white text-sm lg:text-base font-thin lg:mb-0 mb-8">
            © all right reserved to their respective owner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
