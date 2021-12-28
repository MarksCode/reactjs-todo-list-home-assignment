import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "20px 0",
});

export const StyledContent = styled(StyledContainer)(({ theme }) => ({
  width: "80%",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "6px",
  marginTop: "20px",
  flexGrow: 1,
  overflow: "scroll",
}));
