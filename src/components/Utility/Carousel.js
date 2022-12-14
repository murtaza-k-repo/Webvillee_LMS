import React from "react";
import { Carousel as CarouselContainer } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

import logo from "../../assets/img/Webvillee.png";

const Carousel = () => {
  return (
    <CarouselContainer variant="dark" controls={false} indicators={false}>
      <CarouselContainer.Item className="d-flex flex-column align-items-center justify-content-center mt-md-4">
        <img className="d-block" src={logo} alt="logo" />
        <TypeAnimation
          sequence={[
            "Welcome to LMS...",
            2000,
            "Check your potiential...",
            2000,
            "Achieve the certificate...",
            2000,
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "2em",
            color: "white",
          }}
        />
      </CarouselContainer.Item>
    </CarouselContainer>
  );
};

export default Carousel;
