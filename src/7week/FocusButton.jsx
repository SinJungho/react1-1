import React, { useRef } from "react";

export default function FocusButton(props) {
  const inputElement = useRef(null);

  const onButtonClick = () => {
    inputElement.current.focus();
  };
  return (
    <>
      <input ref={inputElement} type="text" />
      <button onClick={onButtonClick}>focus</button>
    </>
  );
}
