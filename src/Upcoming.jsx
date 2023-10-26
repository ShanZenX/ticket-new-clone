import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Upcoming() {
  function Mycard() {
    return (
      <Card className="upcoming-card">
        <img
          className="upcoming-card-img"
          alt="leo"
          src="https://static.tnn.in/thumb/msid-104546570,thumbsize-1549965,width-1280,height-720,resizemode-75/104546570.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Leo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            U/A . Tamil
          </Typography>
        </CardContent>
        <div className="movie-btn">
          <Button size="small" color="success">
            Book Now
          </Button>
        </div>
      </Card>
    );
  }
  return (
    <section className="upcoming">
      <h1>Upcoming Movies</h1>
      <div className="Upcoming-mov">
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
      </div>
    </section>
  );
}
