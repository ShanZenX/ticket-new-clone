import React from "react";
import { MdOutlet } from "react-icons/md";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          className="logo"
          src="https://assetscdn1.paytm.com/movies_new/_next/static/media/tpmc-logo.6a0114d4.png"
          alt="LOGO"
        ></img>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            {" "}
            <a href="/">Movies</a>
          </li>
          <li>
            {" "}
            <a href="/">Cinema</a>
          </li>
          <li>
            {" "}
            <a href="/">Orders</a>{" "}
          </li>
        </ul>
      </div>
      <div className="header-right">
        <MdOutlet className="circle" />
        <div className="bar"></div>
        <MdOutlet className="circle" />
        <MdOutlet className="circle" />
      </div>
    </div>
  );
}
