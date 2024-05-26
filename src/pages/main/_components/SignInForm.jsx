import styled from 'styled-components'
// const SignInForm = () => {
//     return <div> :) </div>
// }

// export default SignInForm

export function SignInForm(){
    return <S.Form> 
        <S.InputBox>
            <S.InputLabel>
                이메일
            </S.InputLabel>
            <S.Input placeholder={"email"}></S.Input>
        </S.InputBox>
    </S.Form>
}

const Form = styled.form`
    background-color: "#f00000";
    display : flex;
    justify-content: center;
    align-items: center;
    padding : 32px;
`

const InputBox = styled.form`
    display : flex;
    justify-content: center;
    align-items:center;
    position: relative;
    margin-bottom: 160px;
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

const S = {
    Form, 
    InputLabel, 
    Input, 
    InputBox
}