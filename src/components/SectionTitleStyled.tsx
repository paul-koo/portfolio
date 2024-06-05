import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const SectionTitleStyled = styled.h2`
    color: ${myTheme.color.black.light};
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
        background-color: ${myTheme.color.yellow.main};
        border-radius: 5px;
        top:30px;
        left: 0;
        z-index: -1;
    }
`