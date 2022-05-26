import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Chart({ chartData, data }) {

  let total = 0;
  data.forEach((data) => {
    total += data.amount;
  });

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="bar-chart mt-4">
        <h1 className="mb-3 ml-2 font-bold text-gray-700 text-xl">
          Spending - Last 7 Days
        </h1>
        <Bar data={chartData} options={options} />
        <hr className="my-5" />
        <div className="grid grid-cols-2">
          <div>
            <p className="text-xs text-gray-400">Total this Month</p>
            <h2 className="text-4xl mt-2 mb-4">${total}</h2>
          </div>
          <div className="grid justify-items-end">
            <p className="text-sm mt-6">+2.4%</p>
            <p className="text-xs text-gray-400 -mt-5">from last month</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
