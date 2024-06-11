import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { myTheme } from "../../styles/Theme.styled";
import { DesktopMenuHeader } from "./desktopMenuHeader/DesktopMenuHeader";
import { MobileMenuHeader } from "./mobileMenuHeader/MobileMenuHeader";

const menuItems = ["About", "Skills", "Projects", "Contacts"]

export function Header() {
    return (
        <StyledHeader>
            <Logo/>
            <DesktopMenuHeader menuItems={menuItems}/>
            <MobileMenuHeader menuItems={menuItems}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: relative;
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




