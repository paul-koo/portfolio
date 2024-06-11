import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const DescriptionStyled = styled.p`
        font-family: "Inter";
        font-size: ${myTheme.fontSize.sectionDescription};
        font-weight: ${myTheme.fontWeight.medium};
        color: ${myTheme.color.font.secondary};
        line-height: 1.6;
`