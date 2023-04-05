import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        label="Home Value"
        min={10000}
        max={1000000}
        defaultValue={10000}
        step={1000}
        onChange={(e, value) => console.log(value)}
        unit="$"
        amount={10000}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(e, value) => console.log(value)}
        unit="$"
        amount={500}
      />
      <SliderComponent
        label="Loan Amount"
        min={200}
        max={1500}
        defaultValue={20}
        step={5}
        onChange={(e, value) => console.log(value)}
        unit="$"
        amount={700}
      />
    </>
  );
};

export default SliderSelect;
