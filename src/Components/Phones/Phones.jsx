import React, { useEffect, useState } from "react";
import Phone from "../Phone/Phone";
import axios from "axios";
import { data } from "autoprefixer";
//https://axios-http.com/docs/intro
//https://github.com/ProgrammingHero1/broken-phone?tab=readme-ov-file

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
      .then((data) => setPhones(data.data.data));
  }, []);

  return (
    <div>
      <h1>Phone:{phones.length}</h1>
      {phones.map(() => (
        <Phone></Phone>
      ))}
    </div>
  );
};

export default Phones;
//7 min
