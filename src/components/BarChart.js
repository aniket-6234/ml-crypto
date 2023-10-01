import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const BarChart = ({ graphData }) => {
  return (
    <div>
      <Line
        data={{
          labels: [
            "Volume 1",
            "Volume 2",
            "Volume 3",
            "Volume 4",
            "Volume 5",
            "Volume 6",
            "Volume 7",
          ],
          datasets: [
            {
              label: "BTC Real-Time Data",
              data: graphData,
              backgroundColor: "#7660f4",
              borderColor: "#462fc1",
              borderWidth: 2,
              fill: false,
              tension: 0.1,
            },
          ],
        }}
        height={380}
        width={450}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              type: "linear",
              grace: "5%",
              ticks: { color: "rgb(182, 179, 179)" },
              grid: { color: "#2E2E2E" },
            },
            x: {
              ticks: { color: "rgb(182, 179, 179)" },
              // grid: { color: "#2E2E2E" },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
