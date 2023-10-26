import React from "react";
import Button from "@mui/material/Button";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdSearch } from "react-icons/md";

export default function Minibar() {
  return (
    <div className="minibar">
      <div className="minibar-btn">
        <Button variant="outlined">Now Showing</Button>
        <Button variant="outlined">Upcoming Show</Button>
      </div>
      <div className="minibar-sch">
        <MdSearch className="sch-logo" />
        <input type="text" placeholder="Search a movie"></input>
      </div>
      <div className="minibar-loc">
        <Button variant="elevated">
          <MdOutlineLocationOn />
          Location
        </Button>
      </div>
    </div>
  );
}
