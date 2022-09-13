import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: { default: "#111C2E" },
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    navBg: {
      main: "#071A2F",
    },
  },
});

export default theme;
