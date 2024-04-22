import React from "react";
//44-2 Responsive Navbar Using React And Tailwind

const Link = ({ routi }) => {
  console.log(routi);
  return (
    <div>
      <li className="mr-10">
        <a href={routi.path}>{routi.name}</a>
      </li>
    </div>
  );
};

export default Link;
