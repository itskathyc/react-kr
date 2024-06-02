import styled from 'styled-components'
import FormInput from '../../../components/FormInput'
import TDButton from '../../../components/Button'

// const SignInForm = () => {
//     return <div> :) </div>
// }

// export default SignInForm

// export function SignInForm(){
//     return <S.Form> 
//         <S.InputBox>
//             <S.InputLabel>
//                 이메일
//             </S.InputLabel>
//             <S.Input placeholder={"email"}></S.Input>
//         </S.InputBox>
//     </S.Form>
// }

const SignInForm = () => {
    return <S.Form>
        <FormInput label={"이메일"} placeholder={"email"} size={2}></FormInput>
        <FormInput label={"비밀번호"} size={1} containerStyle={{width : 100}}/>
        {/** 스타일 가이드/디자인 시스템 -> 정해지니 값으로 컴포넌트를 빠르게 생산 */}
        <TDButton size={"medium"} variant={"secondary"} shape={"shape"}>로그인</TDButton>
    </S.Form>
}

export default SignInForm

const Form = styled.form`
    background-color: "#f00000";
    display : flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding : 32px;
`

const InputBox = styled.form`
    display : flex;
    justify-content: center;
    align-items:center;
    position: relative;
    margin-bottom: 16px;
`

const Input = styled.input`
    border : 1px solid #999;
    width : 100%;
    border-radius : 4px;
    padding-left : 160px;
    height : 48px;
    &::placeholder {
        text-align: center;
    }
`

const InputLabel = styled.form`
    position : absolute;
    left: 16px;
    top : -6px;
    font-size :16px;
    background-color : #fff;
    z-index : 100;
    padding : 0 4px;
`

const Button = styled.div`
    
`

const S = {
    Form, 
    InputLabel, 
    Input, 
    InputBox,
    Button
}



