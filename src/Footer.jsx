import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-d">
        <h3>Download Ticket New On</h3>
        <a href="./" alt="" className="footer-img">
          <img
            src="https://www.seekpng.com/png/detail/34-349265_app-store-google-play-svg.png"
            alt="play store"
          />
        </a>
      </div>
      <div className="f-bar"></div>
      <div className="cr">
        Copyright @ 2023{" "}
        <a
          href="https://github.com/shanmugaraj123"
          className="link-git"
          target="black"
        >
          Shanmugaraj
        </a>
        . All rights received . Privacy policy{" "}
      </div>
    </div>
  );
}
