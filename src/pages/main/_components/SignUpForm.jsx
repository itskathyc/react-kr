import styled from 'styled-components';

export function SignUpForm(){
    return <div> SignUpForm </div> // </div>는 안에 아무것도 없다는 것을 의미함
}

export default SignUpForm

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



