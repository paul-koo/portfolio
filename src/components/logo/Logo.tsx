import styled from "styled-components"
import { myTheme } from "../../styles/Theme.styled"

export function Logo() {
    return (
        <LogoStyled href="google.com">
            Pavel Koltun
        </LogoStyled>
    )
}

const LogoStyled = styled.a`
    color: ${myTheme.color.black.light};
    font-weight: ${myTheme.fontWeight.bold};
    align-self: center;
`