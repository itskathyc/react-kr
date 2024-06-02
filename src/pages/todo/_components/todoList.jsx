import styled from 'styled-components'
import TodoItem from './todoItem'

const TodoList = ({todos}) => {
    return (
        <S.Wrapper>
            {todos.map((todo)=>(
                <todoItem todo={todo}/>
            ))}
        </S.Wrapper>
    )
}

export default TodoList 

const Wrapper = styled.div`
    padding: 32px 0;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`
const S = {
    Wrapper
}