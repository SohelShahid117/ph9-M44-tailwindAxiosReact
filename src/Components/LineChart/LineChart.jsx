import React from "react";
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
//https://recharts.org/en-US/guide/getting-started
//44-6 Use Reachart To Draw Any Type Of Chart Using React

const LineChart = () => {
  const mathMarks = [
    {
      name: "Alice",
      id: 1,
      subject: "Math",
      marks: 85,
    },
    {
      name: "Bob",
      id: 2,
      subject: "Math",
      marks: 76,
    },
    {
      name: "Charlie",
      id: 3,
      subject: "Math",
      marks: 92,
    },
    {
      name: "David",
      id: 4,
      subject: "Math",
      marks: 88,
    },
    {
      name: "Emma",
      id: 5,
      subject: "Math",
      marks: 90,
    },
    {
      name: "Frank",
      id: 6,
      subject: "Math",
      marks: 78,
    },
    {
      name: "Grace",
      id: 7,
      subject: "Math",
      marks: 95,
    },
    {
      name: "Henry",
      id: 8,
      subject: "Math",
      marks: 82,
    },
    {
      name: "Isabel",
      id: 9,
      subject: "Math",
      marks: 87,
    },
    {
      name: "Jack",
      id: 10,
      subject: "Math",
      marks: 91,
    },
  ];

  return (
    <div>
      {/* {mathMarks.map(() => (
        <h1>hi</h1>
      ))} */}
      {/* <LChart></LChart> */}
      <LChart width={600} height={400} data={mathMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="marks"></YAxis>

        <Line type="monotone" dataKey="marks" stroke="#8884d8" />
      </LChart>
    </div>
  );
};

export default LineChart;
