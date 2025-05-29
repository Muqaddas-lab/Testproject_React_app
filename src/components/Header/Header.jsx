import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import Navlink from "./navlink";

function Header() {
  const navlinks = [
    { name: "Home" },
    { name: "Teams" },
    { name: "Tournaments" }
  ];

  return (
    <div className="bg-white w-full p-2 flex justify-between items-center">
      {/* Logo + Text  */}
      <div className="flex items-center space-x-2">
        <Image
          src={logo}
          height={50}
          width={50}
          objectFit="contain"
          alt="Logo"
        />
        <h1 className="text-xl font-bold text-black-700">
          stadium<span className="text-black-600">.co</span>
        </h1>
      </div>

      {/* Navigation links and buttons */}
      <div className="flex gap-[15px] items-center">
        <ul className="flex gap-[6px] items-center">
          {navlinks.map((nav, index) => (
            <Navlink key={index} name={nav.name} />
          ))}
        </ul>
        <button className="px-4 py-2 rounded-xl bg-white text-red-600 border border-red-600 hover:bg-red-100">Sign In</button>
        <button className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700">Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
