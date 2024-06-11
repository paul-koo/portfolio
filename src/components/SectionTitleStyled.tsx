import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";


// font-size: calc( (100vw - Vmin)/(Vmax - Vmin) * (Fmax - Fmin) + Fmin);
export const SectionTitleStyled = styled.h2`
    font-family: "Inter";
    font-size: ${myTheme.fontSize.sectionTitle};
    font-weight: ${myTheme.fontWeight.bold};
    color: ${myTheme.color.font.main};
    line-height: 1.2;

    text-align: center;
    position: relative;
    align-self: center;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 30%;
        background-color: ${myTheme.color.accent};
        border-radius: 0.2em;
        top: 70%;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
    }
`