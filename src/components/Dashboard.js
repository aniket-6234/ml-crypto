import React from "react";
import BarChart from "./BarChart";
import Crypto from "./Crypto";
import News from "./News";
import { useGetCryptosQuery } from "../redux/services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import Loader from "../images/loader.gif";

const Dashboard = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) {
    return (
      <div className="flex bg-black w-screen h-screen justify-center items-center">
        <img className="w-[80px]" src={Loader} alt="loader" />
      </div>
    );
  }

  return (
    <>
      <div className="px-4 lg:px-36 bg-black">
        <h2 className="text-3xl lg:text-2xl font-md">Dashboard</h2>
        <h2 className="text-md lg:text-2xl font-md mt-12 lg:mt-16 text-white">
          Dashboard
        </h2>
        <div className="w-full h-[0.5px] mt-2 lg:mt-2 bg-[#6e6c6b]"></div>
        <h2 className="text-xl lg:text-2xl text-[#13ae7d] font-md mt-8 lg:mt-12">
          Global Crypto Statistic
        </h2>
        <div className="mt-3 lg:mt-8">
          <p className="text-sm lg:text-xl text-[#c3c1c1]">
            Total Cryptocurrencies :
          </p>
          <h3 className="text-4xl text-white lg:text-6xl mt-3 tracking-wide">
            {globalStats.total}
          </h3>
        </div>

        <div className="mini-dashboard">
          <div className="dash-card">
            <p className="dash-card-p">Total Exchanges</p>
            <h3>{millify(globalStats.totalExchanges)}</h3>
          </div>
          <div className="dash-card">
            <p className="dash-card-p">Total Market Cap</p>
            <h3>{millify(globalStats.totalMarketCap)}</h3>
          </div>
          <div className="dash-card">
            <p className="dash-card-p">Total 24hrs Volume</p>
            <h3>{millify(globalStats.total24hVolume)}</h3>
          </div>
          <div className="dash-card">
            <p className="dash-card-p">Total Markets</p>
            <h3>{millify(globalStats.totalMarkets)}</h3>
          </div>
        </div>
        <BarChart />
      </div>
      <div className="pt-32 pb-10 px-4 lg:px-36 bg-black flex justify-between">
        <h1 className="text-md w-[200px] lg:w-full lg:text-3xl font-medium text-white">
          Top 8 Cryptocurrencies in the World
        </h1>
        <h3 className="text-[#e3e3ea] cursor-pointer text-sm lg:text-md w-[100px] font-medium hover:text-[#13ae7d]">
          <Link to="/crypto">show more</Link>
        </h3>
      </div>
      <Crypto simplified />
      <div className="pt-12 pb-10 px-4 lg:px-36 bg-black flex justify-between">
        <h1 className="text-md w-[200px] lg:w-full lg:text-3xl font-medium text-white">
          Top 5 Trending Crypto News
        </h1>
        <h3 className="text-[#e3e3ea] cursor-pointer text-sm lg:text-md w-[100px] font-medium hover:text-[#13ae7d]">
          <Link to="/news">show more</Link>
        </h3>
      </div>
      <News simplified />
    </>
  );
};

export default Dashboard;
