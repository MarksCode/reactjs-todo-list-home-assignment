import { useContext } from "../../context";
import { useFetchTodoItems } from "../../hooks/todo";
import { CircularProgress, Typography } from "@mui/material";
import TodosList from "../../components/Todo/List";
import { StyledContainer, StyledContent } from "./TodoPage.styles";

function TodoPage() {
  const [context] = useContext();
  const { loading, error } = useFetchTodoItems();
  const { todos } = context;
  const todosExist = Object.keys(todos || {}).length;
  const todosFetched = !loading && todosExist;
  const noTodosExist = !loading && !todosExist;

  return (
    <StyledContainer>
      <Typography variant="h4" mb="20px">
        My List
      </Typography>
      {loading ? (
        <CircularProgress size={60} />
      ) : (
        <StyledContent>
          {error && <Typography>{`Something went wrong :(`}</Typography>}
          {noTodosExist && <Typography>No todos to do!</Typography>}
          {todosFetched && <TodosList items={todos} />}
        </StyledContent>
      )}
    </StyledContainer>
  );
}

export default TodoPage;
