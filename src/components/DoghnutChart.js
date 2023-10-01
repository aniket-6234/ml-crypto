import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoghnutChart = ({ doghnutData }) => {
  const data = {
    labels: [
      "Binance Coin (BNB)",
      "Bitcoin (BTC)",
      "Ethereum (ETH)",
      "Tether (USDT)",
      "Ripple (XRP)",
    ],
    datasets: [
      {
        label: "Polar Chart Data",
        data: doghnutData,
        borderColor: "#000000",
        borderWidth: 0.2,
        backgroundColor: [
          "#1537B3",
          "#13AE7D",
          "#EB9815",
          "#4930C0",
          "#0077b6",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: "Polar Area Chart",
      },
    },
  };

  return (
    <div style={{ height: "450px", width: "360px", marginTop: "10px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoghnutChart;
