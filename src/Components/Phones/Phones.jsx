import React, { useEffect, useState } from "react";
import Phone from "../Phone/Phone";
import axios from "axios";
import { data } from "autoprefixer";
//https://axios-http.com/docs/intro
//https://github.com/ProgrammingHero1/broken-phone?tab=readme-ov-file
//https://recharts.org/en-US/examples/BarChartWithCustomizedEvent
//44-7 Axios, Data Extraction And Data Processing Bar Chart

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  //   useEffect(() => {
  //     fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
  //       .then((res) => res.json())
  //       //   .then((data) => console.log(data));
  //       //   .then((data) => console.log(data.data));
  //       .then((data) => setPhones(data.data));
  //   }, []);
  //   console.log(phones);

  useEffect(() => {
    // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    axios
      .get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
      //   .then((data) => console.log(data));
      //   .then((data) => console.log(data.data.data));
      //   .then((data) => setPhones(data.data.data));
      .then((data) => {
        const phoneData = data.data.data;
        const phnDetailsData = phoneData.map((phn) => {
          const obj = {
            name: phn.phone_name,
            price: parseInt(phn.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phnDetailsData);
        setPhones(phnDetailsData);
      });
  }, []);
  console.log(phones);

  return (
    <div>
      <h1>Phone:{phones.length}</h1>
      {/* {phones.map(() => (
        <Phone></Phone>
      ))} */}
      <BarChart width={1000} height={600} data={phones}>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="price"></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="price" fill="green">
          {/* {phones.map((entry, index) => (
            <Cell cursor="pointer" fill={"#82ca9d"} key={`cell-${index}`} />
          ))} */}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Phones;
