import styled from "styled-components";
import TodoItem from "./todoItem_class";

const TodoList = ({ todos, setTodos }) => {
  function deleteTodo(todoId) {
    const deletedTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(deletedTodo);
  }

  function updateTodo({ todoId, content }) {
    const temp_todos = [...todos];
    let selectTodoIndex = temp_todos.findIndex((todo) => todo.id === todoId);
    temp_todos[selectTodoIndex] = {
      ...temp_todos[selectTodoIndex],
      content,
    };
    setTodos(temp_todos);
  }

  return (
    <S.Wrapper>
      {todos.map((todo) => (
        <TodoItem todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      ))}
    </S.Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  padding: 32px 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const S = {
  Wrapper,
};
