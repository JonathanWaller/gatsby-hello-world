// files under 'pages' are like parent components. you can import
// components from 'components', such as 'Header', and display them here.

import React from "react";
import Header from "../components/header";
import { Link } from "gatsby";

export default () => (
  <div style={{ color: `teal` }}>
    {/* <h1>About Gatsby</h1> */}
    <Link to="/">Home</Link>
    <Header headerText="About Gatsby" />
    <Header headerText="This is pretty cool" />
    <p>Such wow. Very React.</p>
  </div>
);
