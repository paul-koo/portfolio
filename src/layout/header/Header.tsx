import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { myTheme } from "../../styles/Theme.styled";
import { BurgerMenu } from "./burgerMenu/BurgerMenu";
import { BurgerIcon } from "./burgerMenu/BurgerIcon";

export const items = ["About", "Skills", "Projects", "Contacts"]

export function Header() {
    return (
        <StyledHeader>
            <Logo/>
            <NavWrapperStyled>
                <Menu items={items}/>
            </NavWrapperStyled>
            <BurgerIcon/>
            <BurgerMenu/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    font-size: ${myTheme.fontSize.sectionDescription};
    display: flex;
    justify-content: space-between;
    background-color: ${myTheme.color.bgColor.secondary};
    padding: 25px ${myTheme.contentPadding};
    /* padding: 0 ${myTheme.contentPadding};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    max-width: 1140px;
    margin: 0 auto;
    z-index: 999; */
`

const NavWrapperStyled = styled.nav`
    margin-left: 50px;
    display: flex;
    max-width: 400px;
    width: 100%;
    justify-content: space-between;
    color: ${myTheme.color.font.main};
    font-weight: ${myTheme.fontWeight.bold};

    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 10px;
    }

    li {
        display: flex;
        position: relative;

        a {
            z-index: 2;
            align-self: center;
        }

    }
    
    li::after {
        content: "";
        width: 0%;
        height: 7px;
        border-radius: 3px;
        background-color: ${myTheme.color.accent};
        position: absolute;
        top: 16px;
        opacity: 0;
        transition: width 0.5s, opacity 0.8s;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    li:hover::after {
        width: 100%;
        opacity: 1;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
`


