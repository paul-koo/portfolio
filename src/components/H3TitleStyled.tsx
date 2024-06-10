import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const H3TitleStyled = styled.h3`
    color: ${myTheme.color.font.main};
    font-size: calc( (100vw - 375px)/(1170 - 375) * (${myTheme.testfontSize.h3Title} - ${myTheme.testfontSizeMobile.h3Title}) + ${myTheme.fontSizeMobile.h3Title});
    /* font-size: ${myTheme.fontSize.h3Title}; */
    text-align: center;
` 