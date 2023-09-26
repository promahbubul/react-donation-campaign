import React, { useEffect, useState } from "react";
import { PieChart, Tooltip, Pie, Cell } from "recharts";

// const info = [
//   { name: "Facebook", value1: 200 },
//   { name: "Instragram", value: 5000 },
//   { name: "Youtube", value: 100 },
//   { name: "LinkedIn", value: 300 },
// ];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

const PiceChartComponent = ({ data }) => {
  const [finalLenght, setFinalLength] = useState(0);

  useEffect(() => {
    const donated = JSON.parse(localStorage.getItem("donates"));

    const allDonatesLength = data.length;
    if (!donated) {
      const donatedLength = 0;
      setFinalLength(donatedLength);
    } else {
      const donatedLength = donated.length;
      setFinalLength(donatedLength);
    }
    const piceData = [
      { name: "Donates", value: allDonatesLength },
      { name: "Donated", value: finalLenght },
    ];
    const COLORS = ["#FF444A", "#00C49F"];
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold">Pie Chart Will shown here</h1>
      {/* <div className="flex flex-col justify-center items-center">
        <PieChart width={500} height={500}>
          <Pie
            className="w-full"
            data={piceData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div> */}
    </>
  );
};

export default PiceChartComponent;
