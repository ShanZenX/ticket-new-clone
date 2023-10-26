import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Mycard() {
  return (
    <Card className="card">
      <img
        className="card-img"
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

export default function Content() {
  return (
    <section className="content">
      <div className="language">
        <FormControl>
          <FormLabel className="language-label">
            <h1>Language</h1>
          </FormLabel>
          <RadioGroup>
            <FormControlLabel value="Tamil" control={<Radio />} label="Tamil" />
            <FormControlLabel
              value="English"
              control={<Radio />}
              label="English"
            />
            <FormControlLabel
              value="Malayalam"
              control={<Radio />}
              label="Malayalam"
            />
            <FormControlLabel
              value="Telugu"
              control={<Radio />}
              label="Telugu"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel className="language-label">
            <h1>Genres</h1>
          </FormLabel>
          <RadioGroup>
            <FormControlLabel
              value="Romance"
              control={<Radio />}
              label="Romance"
            />
            <FormControlLabel value="Drama" control={<Radio />} label="Drama" />
            <FormControlLabel
              value="Action"
              control={<Radio />}
              label="Action"
            />
            <FormControlLabel
              value="Thriller"
              control={<Radio />}
              label="Thriller"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="movie">
        <h1>Movies</h1>
        <div className="movie-row1">
          <Mycard />
          <Mycard />
          <Mycard />
        </div>
        <div className="movie-row1">
          <Mycard />
          <Mycard />
          <Mycard />
        </div>
      </div>
    </section>
  );
}

export { Mycard };
