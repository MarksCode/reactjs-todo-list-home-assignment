import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)({
  width: "100%",
  marginBottom: "10px",
});

export const StyledItem = styled("span")(({ theme, $completed }) => ({
  width: "100%",
  color: theme.palette.primary.contrastText,
  background: $completed
    ? theme.palette.primary.dark
    : theme.palette.primary.light,
  borderRadius: "4px",
  padding: "4px 10px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textDecoration: $completed ? "line-through" : "",
}));
