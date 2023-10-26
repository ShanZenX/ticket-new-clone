import React from "react";
import { Movies } from "./Content";
import { upcomingData } from "./data";

export default function Upcoming() {
  return (
    <section className="upcoming">
      <h1>Upcoming Movies</h1>
      <div className="Upcoming-mov">
        {upcomingData.map((upcomingData) => (
          <Movies
            id={upcomingData.id}
            image={upcomingData.image}
            title={upcomingData.title}
            language={upcomingData.language}
          />
        ))}
      </div>
    </section>
  );
}
