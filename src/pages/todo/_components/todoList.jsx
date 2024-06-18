import styled from "styled-components";
import TodoItem from "./todoItem";
import { useTodo } from "../../../store/todo.store";

const TodoList = () => {
  const { todos, setTodos } = useTodo();
  {
    console.log("1.", todos);
  }
  return (
    <S.Wrapper>
      {console.log(todos)}
      {todos.map((todo) => (
        <TodoItem todo={todo} />
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
