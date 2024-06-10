import styled, { css } from "styled-components"
import { Menu } from "../../../components/menu/Menu"
import { myTheme } from "../../../styles/Theme.styled"
import { menuItems } from "../Header"
import { BurgerButton } from "./burgerButton/BurgerButton"



export const MobileMenuHeader = function() {
    return (
        <MobileMenuWrapperStyled>
            <BurgerButton/>
            <BurgerMenuWrapper isOpen={true}>
                <Menu menuItems={menuItems}/>
            </BurgerMenuWrapper>
        </MobileMenuWrapperStyled>
    )
}

const MobileMenuWrapperStyled = styled.nav`
    display: none;
    width: 100%;
    color: ${myTheme.color.font.main};
    font-weight: ${myTheme.fontWeight.bold};


    @media ${myTheme.media.tablet} {
        display: flex;
    }
`

const BurgerMenuWrapper = styled.div<{isOpen: boolean}>`
    height: 100vh;
    width: calc(100vw) - 30px;
    position: fixed;
    margin: 0px 15px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 999;
    
    background-color: ${myTheme.color.bgColor.secondary};

    ${props => props.isOpen && css<{isOpen: boolean}> `
        
    `}

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        height: 100%;
        font-size: ${myTheme.fontSize.h3Title}
    }
    
`
