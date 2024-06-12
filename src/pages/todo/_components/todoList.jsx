import styled from "styled-components";
import TodoItem from "./_todoItem";

const TodoList = ({ todos, setTodos }) => {

  const onClickDeleteTodo = ({todoId}) => {
    console.log("어떤거 삭제하는데 : ", todoId)

    const deletedTodoList = todos.filter((todo)=>
      todo.id !== todoId
    );
    setTodos(deletedTodoList);
  }

  return (
    <S.Wrapper>
      {todos.map((todo) => (
        <TodoItem todo={todo} 
        setTodos={setTodos}
        onClickDeleteTodo={onClickDeleteTodo}/>
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
