import React from 'react';
import 'chart.js/auto'
import { Bar, Line } from 'react-chartjs-2';

const BarChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ["Start", "Exchanges", "Market Cap", "24hrs Volume", "Market", "T. Curreny"],
          datasets: [
            {
              label: "#Crypto Data in World",
              data: [10, 50, 8, 70, 20, 40],
              backgroundColor: "#13ae7d",
              borderColor: "white",
              borderWidth: 1.5,
            },
          ],
        }}
        height={500}
        width={500}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart