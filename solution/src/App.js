import Balance from "./components/Balance";
import Chart from "./components/Chart";
import data from "../src/data.json";
import { useState } from "react";

function App() {
  //gets current day in lowercase 3 letter, ex: "wed"
  let dateObj = new Date();
  let weekday = dateObj
    .toLocaleString("default", { weekday: "short" })
    .toLowerCase();

  const [financialData, setFinancialData] = useState({
    labels: data.map((data) => data.day),
    datasets: [
      {
        data: data.map((data) => data.amount),
        // finds label on x axis corresponding to weekday, colors it cyan
        backgroundColor: (context) => {
          const index = context.dataIndex;
          const label = context.chart.scales.x.ticks[index]?.label;
          return label === weekday ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)";
        },
        borderSkipped: false,
        borderRadius: {
          topRight: 5,
          topLeft: 5,
          bottomLeft: 5,
          bottomRight: 5,
        },
        hoverBackgroundColor: ["hsl(10, 79%, 80%)"],
      },
    ],
  });

  return (
    <>
      <Balance />
      <Chart chartData={financialData} data={data} />
    </>
  );
}

export default App;
