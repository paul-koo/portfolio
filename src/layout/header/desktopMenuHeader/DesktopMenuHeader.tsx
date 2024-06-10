import styled from "styled-components"
import { Menu } from "../../../components/menu/Menu"
import { myTheme } from "../../../styles/Theme.styled"
import { menuItems } from "../Header"



export const DesktopMenuHeader = function() {
    return (
        <DesktopMenuWrapperStyled>
                <Menu menuItems={menuItems}/>
        </DesktopMenuWrapperStyled>
    )
}

const DesktopMenuWrapperStyled = styled.nav`
    margin-left: 50px;
    display: flex;
    max-width: 400px;
    width: 100%;
    justify-content: space-between;
    color: ${myTheme.color.font.main};
    font-weight: ${myTheme.fontWeight.bold};

    @media ${myTheme.media.tablet} {
        display: none;
    }
`