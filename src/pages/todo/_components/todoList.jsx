import styled from "styled-components";
import TodoItem from "./todoItem";

const TodoList = ({ todos, deleteTodo }) => {
  const deleteTodo = [...todos];

  return (
    <S.Wrapper>
      {todos.map((todo) => (
        <TodoItem todo={todo} deleteTodo={deleteTodo} />
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
