import React from "react";

function Hero() {
  return (
    <div className="Hero" id="hero">
      <video autoPlay muted loop id="bg-video">
        <source src="hero.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="content">
        <h1>GREEN BITE</h1>
        <b><h2>Eat Fresh. Live Green</h2></b>
        <p>Bringing you nature best to your plate.</p>
        <button className="btn btn-light">Explore Products</button>
      </div>
    </div>
  );
}

export default Hero;
