import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled(Container)(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100vw",
  height: "100vh",
}));
