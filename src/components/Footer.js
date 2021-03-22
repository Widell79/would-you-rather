import React from "react";

const Footer = () => {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <div className="footer">
      <p>Mikael Videll &copy;{year}</p>
    </div>
  );
};

export default Footer;
