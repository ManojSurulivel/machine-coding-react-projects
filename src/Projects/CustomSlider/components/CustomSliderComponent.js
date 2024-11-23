import React from "react";
import images from "../data/images";
import CustomSlider from "../components/custom.slider";
import "./custom.slider.css";

function CustomSliderComponent() {
  return (
    <div className="App">
      <h1> Custom Slider </h1>
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>

      <div className="info">

        <h1>ReactJS Slider</h1>
        <h2>Features</h2>
        <ul>
          <li>
            <p>Autoplay</p>
          </li>
          <li>
            <p>Next and Previous Buttons</p>
          </li>
          <li>
            <p>Select a desired slide</p>
          </li>
        </ul>
        <h3>Made by rem029</h3>

      </div>

    </div>
  );
}
export default CustomSliderComponent;