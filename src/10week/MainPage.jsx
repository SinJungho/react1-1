import { useState } from "react";
import WarningBanner from "./WarningBanner";

export default function MainPage(props) {
  const [showWarning, setShowWarning] = useState(false);

  const toggleClick = () => {
    setShowWarning((prveShowWarning) => !prveShowWarning);
  };

  return (
    <div>
      <WarningBanner warning={showWarning} />
      <button onClick={toggleClick}>
        {showWarning ? "감추기" : "보여주기"}
      </button>
    </div>
  );
}
