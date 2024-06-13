import styled from "styled-components";
import TodoItem from "./todoItem";

const TodoList = ({ todos, setTodos }) => {

  function deleteTodo({todoId}){
    const deletedTodo = todos.filter((todo)=> 
      todo.id !== todoId
    )
    setTodos(deletedTodo);
  }

  return (
    <S.Wrapper>
      {todos.map((todo) => (
        <TodoItem todo={todo} 
        deleteTodo = {deleteTodo}
        />
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
