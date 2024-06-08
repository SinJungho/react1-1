import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

export default function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("C");

  function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
  }

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("C");
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("F");
  };

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 5) / 9 + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  const celsius =
    scale === "F" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "C" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={temperature} />
    </>
  );
}
