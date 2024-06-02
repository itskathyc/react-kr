import styled from 'styled-components';
import  SignInForm  from './_components/SignInForm';
import { SignUpForm } from './_components/SignUpForm';
// arrow version
// const Main = () => {
//     return <div> :) </div>
// }

// function version
function Main(){

    // boolean타입으로 할거면 isFormState 처럼 앞에 is를 붙여야함
    // let isFormState = true
    // 상위컴포넌트의 값을 하위컴포넌트에서 변경하고 싶다면
    // Props로 전달
    let formState = "SIGN-IN"

    const TAB_ARRAY = [
        {
            name : 'SIGN-IN', 
            isFormSelected : formState === "SIGN-IN"
        },
        {
            name : "SIGN-UP", 
            isFormSelected : formState === "SIGN-UP"
        }
    ]

    // event함수를 정의할 때 handle을 앞에 적어준다. 혹은 onClick
    function handlePressSignTab (tabName){
        formState = tabName
    }

    // 만들어야하는 컴포넌트
    // 레이아웃, 회원가입 폼, 로그인 폼, 인풋, 버튼
    // 만약에 컴포넌트 나누는게 익숙하지 않으면 => 한번에 작성했다가 이후에 나눠도 ok
    return <S.Wrapper>
        <S.Container className={formState === true ? "SIGN-IN" : "SIGN-UP"}>
            <S.Header>
                {TAB_ARRAY.map((tab, index)=><S.Tab 
                key={index} 
                $isFormSelected={formState === tab.name}
                onClick = {()=> handlePressSignTab(tab.name)}>
                    {tab.name}
                </S.Tab>)}
            </S.Header>
            {
                formState === "SIGN-IN" ? <SignInForm/> : <SignUpForm formState={formState} />
            }
        </S.Container>
        
    </S.Wrapper>
}
export default Main

// 스타일된 요소를 생성해서 컴포넌트화한다. 
const Wrapper = styled.div`
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width : 360px;
    border : 1px solid #999;
`

const Header = styled.div`
    background-color : #00c7ae;
    display : flex;
`

const Tab = styled.div`
    width : 50%;
    cursor : pointer;
    display : flex;
    justify-content : center;
    align-items: center;
    // 달러 중괄호 콜백함수 : 넘겨준값을 가져올 수 있음
    ${(props)=>props.$isFormSelected && 'background-color : #e0e0e0 ;'} // &&는 앞 조건이 true면 뒤를 실행해라. 
    // background-color : ${(props) => props.isSelected && "#e0e0e0"}

    font-size : 32px;
    padding : 16px;
    font-weight : bold;
    &:hover{
        background-color: #e0e0e0;
    }
    /**
    div > section > p > a 에 대한 값 변경을 해야했는데, 
    div > section > p {
        &(div > section > p) > a{
            라고 표현하는 것
        }
    }
    
    */
`

// 객체를 생성하는건 메모리적으로는 조금 손해기는한데, DX를 따졌을 때는 좋다. 작은 퍼포먼스 이슈는 눈감고 넘어가도 된다. 
const S = {
    Wrapper, // Wrapper : Wrapper
    Container,
    Header, 
    Tab,
}
