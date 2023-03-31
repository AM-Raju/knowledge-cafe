import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="max-w-[1280px] px-6 lg:px-0 mx-auto h-24 flex justify-between items-center border-b-2">
        <h2 className="text-xl lg:text-5xl font-bold">PH Blog</h2>
        <div className="grid grid-cols-3 gap-2 lg:gap-6 font-semibold text-center">
          <a className="hover:text-orange-500" href="#">
            Home
          </a>
          <a className="hover:text-orange-500" href="#">
            About Us
          </a>
          <a className="hover:text-orange-500" href="#">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
