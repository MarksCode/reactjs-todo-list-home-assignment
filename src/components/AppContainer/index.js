import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { usePrefersDarkMode, useTheme } from "../../hooks/theme";
import { StyledContainer } from "./AppContainer.styles";

function AppContainer({ children }) {
  const prefersDarkMode = usePrefersDarkMode();
  const theme = useTheme(prefersDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledContainer>{children}</StyledContainer>
    </ThemeProvider>
  );
}

export default AppContainer;
