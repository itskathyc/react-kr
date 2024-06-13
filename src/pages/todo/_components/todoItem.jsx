// 강사님은 이 컴포넌트/파일명을 OneTodo로 하셨음

import { flexAlignCenter } from "../../../libs/styles/common";
import styled, {css} from "styled-components";

const TodoItem = ({ todo, deleteTodo }) => {

  function onClickChangeState({newState}){
    console.log(newState)
  }

  function initialState({initialState}){
    console.log(initialState)
    switch(initialState){
      case 1 : return "[시작전]";
    break;
      case 2: return "[진행중]";
    break;
      case 3: return "[완료]"
    break;
   }}

  function onClickDeleteTodo({todos, setTodos}){
    setTodos(todos)
   }

  return (
    <S.Wrapper state={todo.state}>
      <S.Header>
        <div>
          {initialState({initialState : todo.state})}
          {todo.title}
        </div>
        <div>
          <button onClick={onClickDeleteTodo}>수정</button>
          <button>삭제</button>
        </div>
      </S.Header>
      <S.Content state={todo.state}>{todo.content}</S.Content>
      <S.ButtonContent>
      <div>
        <button onClick={onClickChangeState({newState : 1})}>
          시작전
        </button>
        <button onClick={onClickChangeState({newState : 2})}>
          진행중
        </button>
        <button onClick={onClickChangeState({newState : 3})}>
          완료
        </button>
      </div>
      </S.ButtonContent>
      
    </S.Wrapper>
  );
};

export default TodoItem;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #999;
  margin: 16px 0;
  border-radius: 8px;
  background-color: ${({ state, theme }) =>
    state === 3 ? theme.colors.Gray[1] : theme.colors.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCenter};
  justify-content: space-between;
  padding: 8px 16px;
  height: 48px;
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state === 3 ? "line-through" : "none")};
`;

const ButtonContent = styled.div`
  // 버튼 사이 띄우는 css 어떻게 줄까요? ㅠ?
  display: flex;
  justify-content: center;
`;

const S = {
  Wrapper,
  Header,
  Content,
  ButtonContent
};
