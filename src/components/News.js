import React from "react";
import { useGetCryptoNewsQuery } from "../redux/services/cryptoNewsApi";
import moment from "moment";
import Loader from "../images/loader.gif";
import DemoNewsImage from "../images/total-crypto.png";

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 35,
  });

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
            News
          </h2>
          <div className="w-full h-[0.5px] mt-2 lg:mt-2 bg-[#6e6c6b]"></div>
        </div>
      )}
      <div className="news-container">
        {cryptoNews?.value.map((news, i) => (
          <div key={i} className="news-card">
            <a
              href={news.url}
              target="_blank"
              rel="norefferer"
              className="news-box"
            >
              <div className="flex justify-between">
                <h3 className="news-head">
                  {news.name.length >= 60
                    ? news.name.substring(0, 60) + "..."
                    : news.name}{" "}
                </h3>
              </div>
              <p className="news-para">
                {news.description.length >= 150
                  ? news.description.substring(0, 150) + "..."
                  : news.description}
              </p>
              <div className=" flex justify-between items-center news-bottom">
                <div className="flex justify-between">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        DemoNewsImage
                      }
                      alt="icon"
                    />
                  </div>
                  <p className="text-xs ml-1 mt-2">{news.provider[0]?.name}</p>
                </div>
                <p className="text-xs mt-1 text-blue-700">
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
