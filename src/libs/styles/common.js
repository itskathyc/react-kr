import { css, keyframes } from "styled-components";

// 오늘날에는 AOS라이브러리를 사용하기 때문에 common.js를 많이 사용하지 않는 추세이기도 한다.
// https://whales.tistory.com/157#google_vignette

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const fadeIn = keyframes`
    0% {
        opacity: 0;
        /* top : 50px; */
        transform : translateY(200px); // 위에서 아래로 내려가는 효과
    }

    100%{
        opacity : 1;
        /* top : 0px; */
        transform : translateY(0);
    }

`;
