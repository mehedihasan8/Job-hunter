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
  AreaChart,
  Area,
} from "recharts";
const Statistics = () => {
  const assignments = [
    { name: "a-1", id: 1, mark: 45 },
    { name: "a-2", id: 2, mark: 35 },
    { name: "a-3", id: 3, mark: 55 },
    { name: "a-4", id: 4, mark: 40 },
    { name: "a-5", id: 5, mark: 60 },
    { name: "a-6", id: 6, mark: 50 },
    { name: "a-7", id: 7, mark: 55 },
  ];

  return (
    <div className="mt-12">
      <AreaChart
        width={1000}
        height={400}
        data={assignments}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Statistics;
