import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
} from "recharts";
const Statistics = () => {
  const assignments = [
    { name: "assignment-1", id: 1, mark: 25 },
    { name: "assignment-2", id: 2, mark: 35 },
    { name: "assignment-3", id: 3, mark: 55 },
    { name: "assignment-4", id: 4, mark: 40 },
    { name: "assignment-5", id: 5, mark: 60 },
    { name: "assignment-6", id: 6, mark: 50 },
    { name: "assignment-7", id: 7, mark: 55 },
  ];

  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 590,
  //     pv: 800,
  //     amt: 1400,
  //     cnt: 490,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 868,
  //     pv: 967,
  //     amt: 1506,
  //     cnt: 590,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 1397,
  //     pv: 1098,
  //     amt: 989,
  //     cnt: 350,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 1480,
  //     pv: 1200,
  //     amt: 1228,
  //     cnt: 480,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1520,
  //     pv: 1108,
  //     amt: 1100,
  //     cnt: 460,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 1400,
  //     pv: 680,
  //     amt: 1700,
  //     cnt: 380,
  //   },
  // ];
  return (
    <div className="mt-12">
      <ComposedChart
        width={1000}
        height={400}
        data={assignments}
        margin={{
          top: 50,
          right: 20,
          left: 50,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="mark" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="mark" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Statistics;
