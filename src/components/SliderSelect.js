import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent min={0} max={50} defaultValue={20} />
      <SliderComponent min={100} max={50} defaultValue={20} />
      <SliderComponent min={300} max={500} defaultValue={20} />
    </>
  );
};

export default SliderSelect;
