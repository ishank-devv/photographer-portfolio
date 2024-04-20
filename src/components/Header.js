import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center absolute px-12 py-6 z-10">
      <div className="flex items-center">
        <img
          className="w-44"
          src="ishank-suri-high-resolution-logo-black-transparent.png"
          alt="logo"
        />
      </div>
      <div className="flex px-8">
        <ul className="flex p-4 m-2 space-x-4">
          <li>Portraits</li>
          <li>Landscapes</li>
          <li>Street</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
