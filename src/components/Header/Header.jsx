import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="max-w-[1240px] px-6 lg:px-0 mx-auto h-24 flex justify-between items-center border-b-2">
        <h2 className="text-5xl font-bold">PH Blog</h2>
        <div className="grid grid-cols-3 gap-6 font-semibold">
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
