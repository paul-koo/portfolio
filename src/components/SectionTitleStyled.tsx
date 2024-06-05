import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const SectionTitleStyled = styled.h2`
    color: ${myTheme.color.font.main};
    font-size: ${myTheme.fontSize.sectionTitle};
    text-align: center;
    position: relative;
    align-self: center;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 12px;
        background-color: ${myTheme.color.accent};
        border-radius: 5px;
        top:30px;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
    }
`