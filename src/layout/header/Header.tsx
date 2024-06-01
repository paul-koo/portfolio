import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { myTheme } from "../../styles/Theme.styled";

const items = ["About", "Skills", "Projects", "Contacts"]

export function Header() {
    return (
        <StyledHeader>
            <Logo/>
            <NavWrapperStyled>
                <Menu items={items}/>
            </NavWrapperStyled>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: ${myTheme.color.white.main};
    height: 40px;
    padding: 0 30px;
`

const NavWrapperStyled = styled.nav`
    display: flex;
    color: ${myTheme.color.black.light};
    font-weight: ${myTheme.fontWeight.bold};

    ul {
        display: flex;
        gap: 40px;
    }

    li {
        display: flex;
        position: relative;

        a {
            z-index: 2;
            align-content: center;
        }

    }
    
    li::after {
        content: "";
        display: block;
        width: 0%;
        height: 8px;
        border-radius: 3px;
        background-color: ${myTheme.color.yellow.opacity};
        position: absolute;
        top: 22px;
        transition: width 0.5s ease-out;
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
