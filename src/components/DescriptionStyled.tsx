import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const DescriptionStyled = styled.p`
    font-size: calc( (100vw - 375px)/(1170 - 375) * (${myTheme.testfontSize.sectionDescription} - ${myTheme.testfontSizeMobile.sectionDescription}) + ${myTheme.fontSizeMobile.sectionDescription});
    /* font-size: ${myTheme.fontSize.sectionDescription}; */
    color: ${myTheme.color.font.secondary};
    line-height: 1.6rem;
`

// import styled from "styled-components";
// import { myTheme } from "../styles/Theme.styled";

// export const SectionDescription = styled.p`
//     font-size: ${myTheme.fontSize.sectionDescription};
//     color: ${myTheme.fontSize.h3Title};
//     /* max-width: 500px;
//     text-align: center;  */
//     line-height: 1.5rem;
// `