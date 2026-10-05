import { createContext, useContext } from "react";
import useLocalStorage from "./useLocalStorage";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  // const [theme, setTheme] = useState("light"); //changing theme
  const [theme, setTheme] = useLocalStorage("theme","light"); //changing theme


  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // all children will get access, any child gets access
    // will have these two values, current theme, toggle btn
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}