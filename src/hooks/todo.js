import { useCallback } from "react";
import { useAsync } from "react-use";
import { useContext, Actions } from "../context";
import { getTodos } from "../api";

export function useFetchTodoItems() {
  const [_, dispatch] = useContext();
  const { loading, error } = useAsync(async () => {
    let error = "";
    try {
      const todos = await getTodos();
      const todosMap = todos.reduce((map, todo) => {
        map[todo.id] = todo;
        return map;
      }, {});
      dispatch({ type: Actions.AddTodos, args: todosMap });
    } catch (e) {
      error = e.message;
    }
    if (error) {
      throw new Error(`Fetch Todos Error: ${error}`);
    } else {
      return true;
    }
  }, []);
  return { loading, error };
}

export function useToggleItem() {
  const [_, dispatch] = useContext();
  return useCallback(
    (id) => {
      dispatch({ type: Actions.ToggleComplete, args: id });
    },
    [dispatch]
  );
}

export function useDeleteItem() {
  const [_, dispatch] = useContext();
  return useCallback(
    (id) => {
      dispatch({ type: Actions.Delete, args: id });
    },
    [dispatch]
  );
}
