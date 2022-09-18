import React from "react";
import millify from "millify";

const CryptoCard = ({ crypto }) => {
  return (
    <div className="crypto-card">
      <div className="flex justify-between items-center px-6 py-3">
        <p className="text-sm">{`${crypto.rank}. ${crypto?.name}`}</p>
        <div className="w-10 h-10 rounded-full">
          <img className="crypto-image" src={crypto.iconUrl} alt="img" />
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
      <div className="px-6">
        <p className="rounded-para">Price: {millify(crypto?.price)}</p>
      </div>
      <div className="px-6 mt-5 flex justify-between items-center">
        <p className="x-number">{`×××× ×××× ×××× ××${crypto.marketCap.slice(
          2,
          4
        )}`}</p>
        <p className="rounded-div"></p>
      </div>
      <div className="bottom-div">
        <p className="tapToSee">Tap to see. </p>
      </div>
    </div>
  );
};

export default CryptoCard;
