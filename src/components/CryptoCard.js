import React from "react";
import millify from "millify";

const CryptoCard = ({ crypto }) => {
  return (
    <div className="crypto-card">
      <div className="px-6 py-2.5 card-bottom">
        <p className="text-sm">{`${crypto.rank}. ${crypto?.name}`}</p>
        <div className="w-8 h-8 rounded-full">
          <img className="crypto-image" src={crypto.iconUrl} alt="img" />
        </div>
      </div>
      <div className="px-6 mt-4">
        <p className="rounded-para rounded-price">Price: {millify(crypto?.price)}</p>
      </div>
      <div className="px-6 mt-4 flex justify-between items-center">
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
