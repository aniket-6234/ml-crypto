import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import SearchIcon from "../images/search.svg";
import ArrowIcon from "../images/arrow.svg";
import Loader from "../images/loader.gif";

import {
  useGetCryptoHistoryQuery,
  useGetCryptosQuery,
} from "../redux/services/cryptoApi";
import CryptoCard from "./CryptoCard";

const Crypto = ({ simplified }) => {
  const count = simplified ? 8 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(cryptos);

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) {
    return (
      <div className="flex bg-black w-screen h-screen justify-center items-center">
        <img className="w-[80px]" src={Loader} alt="loader" />
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-24 bg-black overflow-auto">
      {!simplified && (
        <div>
          <h2 className="text-md lg:text-2xl font-md mt-20 lg:mt-24 text-white">
            Crypto
          </h2>
          <div className="w-full h-[0.5px] mt-2 lg:mt-2 bg-[#6e6c6b]"></div>
        </div>
      )}

      {!simplified && (
        <div className="search-bar">
          <img src={SearchIcon} alt="icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Search here..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="get-btn">
            <p>get</p>
            <img src={ArrowIcon} alt="icon" />
          </div>
        </div>
      )}
      <div className="card-container">
        {cryptos?.map((currency) => (
          <div key={currency.uuid}>
            <Link to={`/cryptoDetail/${currency.uuid}`}>
              <CryptoCard crypto={currency} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crypto;
