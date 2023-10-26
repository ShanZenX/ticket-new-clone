import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function MoviesBanner() {
  return (
    <Carousel
      className="Mycarousel"
      interval="3000"
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      stopOnHover={true}
    >
      <div>
        <img
          src="https://assetscdn1.paytm.com/images/catalog/view_item/2107138/1697535559563.jpg?format=webp&imwidth=1024"
          alt="1st img"
        ></img>{" "}
      </div>
      <div>
        <img
          src="https://assetscdn1.paytm.com/images/catalog/view_item/2101419/1697182760635.jpg?format=webp&imwidth=1024"
          alt="2nd img"
        ></img>{" "}
      </div>
      <div>
        <img
          src="https://assetscdn1.paytm.com/images/catalog/view_item/2107132/1697535074479.jpg?format=webp&imwidth=1024"
          alt="3rd img"
        ></img>{" "}
      </div>
    </Carousel>
  );
}
