import React from "react";
import styled from "@emotion/styled";

const IntroStyled = styled.h1`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;

    font-size: 2rem;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
`;

function intro() {
    return <IntroStyled>i-rocks KR-6170</IntroStyled>;
}

export { intro as default };
