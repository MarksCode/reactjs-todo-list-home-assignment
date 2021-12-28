import { useMemo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material/styles";

export function usePrefersDarkMode() {
  return useMediaQuery("(prefers-color-scheme: dark)");
}

export function useTheme(darkMode) {
  return useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );
}
