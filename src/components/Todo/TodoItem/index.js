import { memo } from "react";
import { StyledItem, StyledButton } from "./TodoItem.styles";

function TodosItem({ data = {}, onClick }) {
  const { id, title, completed } = data;
  return (
    <StyledButton data-id={id} onClick={onClick} aria-label={title}>
      <StyledItem $completed={completed}>{title}</StyledItem>
    </StyledButton>
  );
}

export default memo(TodosItem, (prevProps, nextProps) => {
  return prevProps.data.completed === nextProps.data.completed;
});
