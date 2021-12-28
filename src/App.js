import { ContextProvider } from "./context";
import TodoPage from "./pages/TodoPage";
import AppContainer from "./components/AppContainer";

export default function App() {
  return (
    <ContextProvider>
      <AppContainer>
        <TodoPage />
      </AppContainer>
    </ContextProvider>
  );
}
