import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return <p>Made by Aman &#169; {year} </p>;
}

export default Footer;
