import { useCallback } from "react";
import { List } from "@mui/material";
import TodoItem from "../TodoItem";
import { useDeleteItem, useToggleItem } from "../../../hooks/todo";

function TodosList({ items = {} }) {
  const deleteItem = useDeleteItem();
  const toggleItem = useToggleItem();

  const onItemClick = useCallback(
    (e) => {
      const { id } = e.currentTarget.dataset;
      if (e.metaKey) {
        deleteItem(id);
      } else {
        toggleItem(id);
      }
    },
    [deleteItem, toggleItem]
  );

  return (
    <List sx={{ width: "60%", margin: "0 auto" }}>
      {Object.entries(items).map(([id, todoItem]) => {
        return <TodoItem data={todoItem} key={id} onClick={onItemClick} />;
      })}
    </List>
  );
}

export default TodosList;
