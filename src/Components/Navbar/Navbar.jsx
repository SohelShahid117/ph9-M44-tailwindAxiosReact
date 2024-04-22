import React, { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
//44-2 Responsive Navbar Using React And Tailwind
//44-3 Create Nav Toggle And Navbar Animation

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/products", name: "Products" },
  ];

  return (
    <nav className="bg-cyan-600">
      {/* <div onClick={() => setOpen(true)}> */}

      <div className="text-2xl" onClick={() => setOpen(!open)}>
        {/* {open === true ? "open" : "close"} */}

        {open === true ? <IoCloseSharp /> : <IoMdMenu />}
      </div>
      {/* <IoMdMenu className="text-3xl" />
      <IoCloseSharp className="text-2xl" /> */}

      {/* <ul className="flex absolute"> */}
      <ul
        className={`absolute md:flex duration-1000 bg-cyan-600 ${
          // open ? "top-6" : "top-60"
          open ? "top-6" : "-top-60"
        }`}
      >
        {/* {routes.map((routeee) => (
          <li className="mr-10">
            <a href={routeee.path}>{routeee.name}</a>
          </li>
        ))} */}

        {routes.map((routi) => (
          <Link routi={routi} key={routi.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
