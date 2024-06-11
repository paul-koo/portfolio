import styled from "styled-components"
import { Menu } from "../headerMenu/Menu"
import { myTheme } from "../../../styles/Theme.styled"



export const DesktopMenuHeader = function(props: {menuItems: Array<string>}) {
    return (
        <DesktopMenuWrapperStyled>
                <Menu menuItems={props.menuItems}/>
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