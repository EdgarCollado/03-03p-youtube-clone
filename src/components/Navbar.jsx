import React from 'react';
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";

import { SearchBar } from "./";

const Navbar = () => {
  return (
    <div>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
