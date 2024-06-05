import styled from "styled-components"
import { myTheme } from "../../styles/Theme.styled"

export function Logo() {
    return (
        <LogoStyled href="google.com">
            Pavel
        </LogoStyled>
    )
}

const LogoStyled = styled.a`
    color: ${myTheme.color.font.main};
    font-weight: ${myTheme.fontWeight.bold};
    font-size: ${myTheme.fontSize.sectionDescription};
    align-self: center;
`