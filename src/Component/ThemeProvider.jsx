import { createContext, useState, useMemo, useContext } from "react";
import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = useMemo(() => {
        return createTheme({
          palette: {
            mode: darkMode ? "dark" : "light",
            background: {
                default: darkMode ? "#121212" : "rgba(255, 192, 203,0.2)",
                paper: darkMode ? "#1e1e1e" : "#fff",
            },
            text: {
                primary: darkMode ? "#ffffff" : "#000000",
            },
          },
        });
    }, [darkMode]);

    const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}