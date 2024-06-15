import styled, { css } from "styled-components"
import { Menu } from "../headerMenu/Menu"
import { myTheme } from "../../../styles/Theme.styled"
import { useState } from "react"



export const MobileMenuHeader = function(props: {menuItems: Array<string>}) {
    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => { setmenuIsOpen(!menuIsOpen)}
    return (
        <MobileMenuWrapperStyled>
            <BurgerButtonWrapper isOpen={menuIsOpen} onClick= {onBurgerBtnClick}>
            <span></span>
            </BurgerButtonWrapper>
            <BurgerMenuWrapper isOpen={menuIsOpen}>
                <Menu menuItems={props.menuItems}/>
            </BurgerMenuWrapper>
        </MobileMenuWrapperStyled>
    )
}

const BurgerButtonWrapper = styled.button<{isOpen: boolean}>`
    right: 45px;
    top: 25px;
    background-color: ${myTheme.color.bgColor.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 20px;
    z-index: 9999;


    span {
        display: block;
        height: 3px;
        width: 30px;
        border-radius: 30px;
        background-color: ${myTheme.color.accent};
        position: relative;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}


        &::before {
            content: "";
            display: block;
            height: 3px;
            width: 30px;
            border-radius: 30px;
            background-color: ${myTheme.color.accent};

            position: absolute;
            transform: translateY(-10px);
            transition: 0.5s
            
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: translateY(0);
                transform: rotate(-45deg);
                transition: 0.5s;
            `}
        }

        &::after {
            content: "";
            display: block;
            height: 3px;
            width: 30px;
            border-radius: 30px;
            background-color: ${myTheme.color.accent};

            position: absolute;
            transform: translateY(10px);
            transition: 0.5s

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: translateY(0);
                transform: rotate(45deg);
                transition: 0.5s
            `}
        }

    }


`
    

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
    display: flex;
    transform: translateX(110%);
    transition: 1s;
    
    background-color: ${myTheme.color.bgColor.secondary};

    ${props => props.isOpen === true && css<{isOpen: boolean}>`
        transform: translateX(0);
        transition: 1s;
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
