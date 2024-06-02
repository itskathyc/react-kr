import React from "react"
import styled, {css} from 'styled-components'

const FormInput = ({label, size, containerStyle, ...props}) => {
    return <S.InputBox style={containerStyle}> {/** 여기서 {} 를 쓰는 이유는 Js를 사용하기 위한 코드블럭 역할, {안에 {}를 쓰는건 객체} */}
    <S.InputLabel>{label}</S.InputLabel>
    <S.Input $size={size} {...props}/>
    {/* 나머지 매개 변수 전달을ㄹ 통한 input의 속성 값 전달 */}
    </S.InputBox>
}
export default FormInput

const sizeCss = {
    1:css`
        width : 100px;
        height : 30px;
    `,
    2:css`
        width : 300px;
        height : 48px;
    `,
    3:css`
        width : 100%;
        height : 48px;
    `
}


const InputBox = styled.div`
    display : flex;
    justify-content: center;
    align-items:center;
    position: relative;
    margin-bottom: 16px;
    width : 100%;
`

const Input = styled.input`
    border : 1px solid #999;
    border-radius : 4px;
    padding-left : 16px;

    ${(props) => sizeCss[props.$size]} // 속성값으로 몇번 (1~3)이 들어가냐에 따라 css문법이 따라
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
    InputLabel, 
    Input, 
    InputBox
}