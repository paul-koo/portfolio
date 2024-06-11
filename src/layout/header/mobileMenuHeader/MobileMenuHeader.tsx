import styled, { css } from "styled-components"
import { Menu } from "../headerMenu/Menu"
import { myTheme } from "../../../styles/Theme.styled"
import { BurgerButton } from "./burgerButton/BurgerButton"



export const MobileMenuHeader = function(props: {menuItems: Array<string>}) {
    return (
        <MobileMenuWrapperStyled>
            <BurgerButton/>
            <BurgerMenuWrapper isOpen={false}>
                <Menu menuItems={props.menuItems}/>
            </BurgerMenuWrapper>
        </MobileMenuWrapperStyled>
    )
}

const MobileMenuWrapperStyled = styled.nav`
    display: none;
    justify-content: flex-end;
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
    display: none;
    
    background-color: ${myTheme.color.bgColor.secondary};

    ${props => props.isOpen === true && css<{isOpen: boolean}>`
        display: flex;
    `}

    ul {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        height: 100%;
        font-size: ${myTheme.fontSize.h3Title};

    };



    /* li::after :hover:hover {
        width: 100%;
    } */

`
