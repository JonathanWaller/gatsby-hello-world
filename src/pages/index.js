import React from "react";
import { Link } from "gatsby";

export default () => (
  <div style={{ color: "purple" }}>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>
    <h1> Hello Gatsby!</h1>
    <p>What a world</p>
    <img
      src="http://www.pmlive.com/__data/assets/image/0005/1245524/Horizon.JPG"
      alt=""
    />
  </div>
);
