import React from "react";

/**
 * 1. props
 *
 *      function 상위 컴포넌트(){
 *          const value_1 = "값"
 *          const value_2 = "값"
 *
 *          return(
 *              <하위컴포넌트/>  => 리액트에서는 연달아 요소가 올 수 없다. <div>도 연달아 못씀. 그래서 wrapper로 감싸줘야함.
 *              <></> => Fragment라고 한다. 아무런 영향, 역할도 없이 wrap을 하기 위해 존재하는 태그. 근데 그래서 기능도 못줌
 *              <React.Fragment> => 속성 부여 가능
 *              ex) <React.Fragment key={index}>
 *              <하위컴포넌트/>
 *          )
 *      }
 * 2. 구조분해할당
 *      -> 자바스크립트에서 데이터의 대표적인 집단 => 배열, 객체
 *      -> 구조를 분해하여 각각의 요소를 변수로 표현하는 과정을 축약
 *      1. 객체형태
 *      const info = {
 *          name : Mimi,
 *          age : 19
 *      }
 *      const {name : MyName, age : guessWhat } = info
 *      => 만약 구조분해할당으로 할당한 속성값들의 이름을 변경해서 사용하고싶으면 a:변경이름 으로 선언
 *      2. 배열형태
 *      const info = [Mimi, 29]
 *      const [name, age] = info (대신 인덱스 순서를 맞춰야함)
 *
 *
 * 3. 나머지 매개변수 연산자
 *      
 *
 */

export function FormInput({ label, size }) {
  return (
    <React.Fragment>
      <div>FormInput</div>
    </React.Fragment>
  );
}
