import React from "react";
const ThemeContext = React.createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function Button() {
  return <button>button</button>;
}

function ThemeButton() {
  return (
    <ThemeContext.Consumer>
      {(value) => <Button theme={value} />}
    </ThemeContext.Consumer>
  );
}
