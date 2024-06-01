import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const SectionTitleStyled = styled.h2`
    font-size: 40px;
    text-align: center;
    position: relative;
    align-self: center;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 12px;
        background-color: ${myTheme.color.yellow.main};
        border-radius: 5px;
        top:35px;
        left: 0;
        z-index: -1;
    }
`