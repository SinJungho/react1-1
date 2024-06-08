// import { useState } from "react";
const scaleNmae = {
  c: "섭씨",
  f: "화씨",
};

export default function TemperatureInput(props) {
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>온도를 입력하세요. (단위 : {scaleNmae[props.scale]})</legend>
      <input type="text" value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}
