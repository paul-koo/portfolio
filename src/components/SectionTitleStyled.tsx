import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

// font-size: calc( (100vw - Vmin)/(Vmax - Vmin) * (Fmax - Fmin) + Fmin);
export const SectionTitleStyled = styled.h2`
    color: ${myTheme.color.font.main};
    font-size: calc( (100vw - 375px)/(1170 - 375) * (${myTheme.testfontSize.sectionTitle} - ${myTheme.testfontSizeMobile.sectionTitle}) + ${myTheme.fontSizeMobile.sectionTitle});
    /* font-size: ${myTheme.fontSize.sectionTitle}; */
    text-align: center;
    position: relative;
    align-self: center;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        width: 120%;
        height: 12px;
        background-color: ${myTheme.color.accent};
        border-radius: 5px;
        top: 70%;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
    }
`