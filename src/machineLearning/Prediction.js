import React, { useEffect } from "react";
import { useGetCryptoNewsQuery } from "../redux/services/cryptoNewsApi";
import moment from "moment";
import Loader from "../images/loader.gif";
import DemoNewsImage from "../images/total-crypto.png";
import { scrollToTopAfterPageRender } from "../utils/scrollToTop";

const Prediction = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 35,
  });

  useEffect(() => {
    scrollToTopAfterPageRender();
  }, []);

  if (!cryptoNews?.value) {
    return (
      <div className="flex bg-black w-screen h-screen justify-center items-center">
        <img className="w-[80px]" src={Loader} alt="loader" />
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-24 bg-black overflow-auto">
      {!simplified && (
        <div className="pb-10">
          <h2 className="text-md lg:text-2xl font-md mt-20 lg:mt-24 text-white page-text">
            WORK IN PROGRESS ...
          </h2>
          <div className="w-full h-[0.5px] mt-2 lg:mt-2 bg-[#313131]"></div>
        </div>
      )}
    </div>
  );
};

export default Prediction;
