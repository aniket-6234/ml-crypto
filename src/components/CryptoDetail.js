import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import { Col, Row, Typography, Select } from "antd";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery
} from "../redux/services/cryptoApi";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import Loader from "../images/loader.gif";

const { Title, Text } = Typography;

const CryptoDetail = () => {
  const { uuid } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(uuid);
  const cryptoDetails = data?.data?.coin;
  // console.log("detail : ", cryptoDetails);
  
  if (isFetching) {
   return (
     <div className="flex bg-black w-screen h-screen justify-center items-center">
       <img className="w-[80px]" src={Loader} alt="loader" />
     </div>
   );
  }


  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];








  return (
    <div className="px-4 lg:px-36 bg-black overflow-auto">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-md lg:text-2xl font-md mt-20 lg:mt-24 text-white">
              {cryptoDetails.name}
            </h2>
            <p className="text-[#c3bfbf] text-xs lg:text-sm mt-2 font-thin">
              {cryptoDetails.name} live price in US dollars. View value
              statistics, market cap and supply.
            </p>
          </div>
          <img
            className="w-10 h-10 mt-[70px] lg:mt-[90px]"
            src={cryptoDetails.iconUrl}
            alt="icon"
          />
        </div>
        <div className="w-full h-[0.5px] mt-2 lg:mt-2 bg-[#6e6c6b]"></div>
      </div>

      <div className="mt-8 lg:mt-16 flex justify-between flex-wrap">
        <div>
          <p className="text-md lg:text-xl font-medium text-[#13ae7d] lg:text-white">
            {cryptoDetails.name} Value Statistics
          </p>
          <p className="text-xs lg:text-sm text-[#c3bfbf] mt-1 lg:mt-2 mb-5">
            An overview of showing the statistics crypto coin data of{" "}
            {cryptoDetails.name}
          </p>
          {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </div>

        <div className="mt-12 lg:mt-0">
          <p className="text-md lg:text-xl font-medium text-[#13ae7d] lg:text-white">
            Other Statistics
          </p>

          <p className="text-xs lg:text-sm text-[#c3bfbf] mt-1 lg:mt-2 mb-5">
            An overview of showing the data statistics of all cryptocurrencies
          </p>
          {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </div>
      </div>

      <div className="mt-4 lg:mt-12 mb-20 flex justify-between flex-wrap">
        <Col className="coin-desc-link">
          <div className="coin-desc">
            <p className="new-coin-details-heading">
              <span className="what-is">What is {cryptoDetails.name} ?</span>
              {HTMLReactParser(cryptoDetails.description)}
            </p>
          </div>
          <Col className="coin-links">
            <Title level={3} className="coin-details-heading">
              {cryptoDetails.name} Links
            </Title>
            {cryptoDetails.links.map((link) => (
              <Row className="coin-link" key={link.name}>
                <Title level={5} className="link-name">
                  {link.type}
                </Title>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </Row>
            ))}
          </Col>
        </Col>
      </div>
    </div>
  );
}

export default CryptoDetail