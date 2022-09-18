import React, { useState, useRef } from "react";
import ArrowDown from "../images/arrow-down.svg";
import CryptoImage from "../images/crypto-illustration.png";
import CryptoContent from "../images/crypto-content-img.png";
import CardGif from "../images/card-gif.gif";
import TabOpen from "../images/tab-open.png";
import GreenTree from "../images/green-tree.png";
import MastercardIcon from "../images/mastercard.png";

const Home = () => {
  const scrollBottomRef = useRef(null);
  const [changeColor, setChangeColor] = useState(false);

  const changeTextColor = () => {
    setChangeColor((prev) => !prev);
  };

  const scrollToBlue = () => {
    scrollBottomRef.current.scrollIntoView();
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
          <p className="mt-4 lg:w-[600px] last-para">
            We need to explore the{" "}
            <span id="change-text-para">cryptocurrency</span> because it is our
            future transactions where everything is going to replace by{" "}
            <span id="change-text-para">crypto</span>.
          </p>
          <div onClick={scrollToBlue} className="btn-scroll-down">
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
        className="px-4 py-12 lg:px-24 lg:py-20 bg-[#1755FF] flex flex-wrap justify-between"
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

      <div className="px-4 py-14 lg:px-24 lg:py-32 bg-[#1e1e20] flex flex-wrap flex-col-reverse lg:flex-row lg:justify-between">
        <div className="">
          <div
            onClick={changeTextColor}
            className={changeColor ? `credit-card-2` : `credit-card-1`}
          >
            <div className="flex justify-between">
              <h1 className="crypto-card-head">Crypto Credit Card</h1>
              <div className="">
                <img
                  className="mastercard"
                  src={MastercardIcon}
                  alt="mastercard"
                />
              </div>
            </div>

            <div className="flex justify-center w-fit px-3 py-3 items-center text-xs mt-2 lg:mt-4 bg-white/50 cursor-pointer">
              \\\\\\\\\\\
            </div>
            <p className="mt-6 lg:mt-7 text-white tracking-wider">
              8756 9012 0086 4374
            </p>
            <p className="text-black w-[100%] text-xs mt-3 lg:mt-4 font-light">
              The New Indian Exchanges Market need this New Credit Card for
              Secure Transactions.{" "}
            </p>
          </div>
          <h3
            className={
              changeColor
                ? `text-[#36bc7e] font-thin mt-8 lg:mt-8 text-xs lg:text-base`
                : `text-white font-thin mt-8 lg:mt-8 text-xs lg:text-base`
            }
          >
            Try to Click on this above card
          </h3>
          <h1 className="change-text-3">and See the Magic.</h1>
        </div>
        <div className="">
          <h3
            className={
              changeColor
                ? `text-[#36bc7e] text-2xl lg:text-5xl lg:leading-snug lg:font-semibold font-medium w-[300px] lg:w-[480px]`
                : `text-white text-2xl lg:text-5xl lg:leading-snug font-medium w-[300px] lg:w-[480px]`
            }
          >
            Trade, invest, and Send your money on crypto currency
          </h3>
          <p className={changeColor ? `card-para-2` : `card-para-1`}>
            Solution for all people that want to use crypto currency for trade,
            invest, transaction, etc. Track & trade your coin portfolio now.
          </p>
        </div>
      </div>
      <div className="bg-[#058333] px-4 py-12 lg:px-24 lg:py-32 ">
        <div className="flex flex-wrap justify-between">
          <div className="">
            <h1 className="text-white font-medium lg:font-semibold lg:leading-snug text-2xl lg:text-5xl w-[350px] lg:w-[550px]">
              Get & Collect all your money from Friends, Family, Store on Every
              Transactions.
            </h1>
            <p className="mt-6 lg:mt-20 font-medium lg:leading-normal text-black text-sm w-[350px] lg:text-xl lg:w-[550px]">
              Crypto Verse is for all the Users and this is the emerging trend
              that can be changed the transaction history of the World.
            </p>
          </div>
          <div className="">
            <img className="green-tree" src={GreenTree} alt="img" />
          </div>
        </div>
        <div>
          <p className="text-white text-sm lg:text-base font-thin lg:mt-0 mt-4">
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
