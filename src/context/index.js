import { createReducerContext } from "react-use";
import cloneDeep from "lodash.clonedeep";

export const Actions = {
  AddTodos: "add",
  Delete: "delete",
  ToggleComplete: "toggleComplete",
};

const reducer = (state, action) => {
  const { type, args } = action || {};
  const newTodos = cloneDeep(state.todos);
  switch (type) {
    case Actions.AddTodos:
      return { todos: args };
    case Actions.Delete:
      delete newTodos[args];
      return Object.assign({}, state, { todos: newTodos });
    case Actions.ToggleComplete:
      newTodos[args].completed = !newTodos[args].completed;
      return Object.assign({}, state, { todos: newTodos });
    default:
      throw new Error("Reducer: Unexpected action type");
  }
};

const intialAppContext = {
  todos: {}, // { <id>: <Todo Item> }
};

/**
 * @return {array} [useContext: [context, dispatch], ContextProvider]
 */
const [useContext, ContextProvider] = createReducerContext(
  reducer,
  intialAppContext
);

/**
 * @typedef {Object} context
 * @property {function} useContext - [context, dispatch]
 * @property {object} ContextProvider - context provider component
 */
export { useContext, ContextProvider };
