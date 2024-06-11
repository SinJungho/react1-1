import { useCallback, useState } from "react";
import ThemeContext from "./ThemeContext";
import MainContext from "./MainContext";

export default function LightOrDark() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    if (theme === "dark") {
      setTheme("light");
      return;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContext />
    </ThemeContext.Provider>
  );
}
