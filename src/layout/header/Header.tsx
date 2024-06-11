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
    padding: 25px 30px;

    @media ${myTheme.media.mobile} {
        padding: 20px 10px;
    }
`




