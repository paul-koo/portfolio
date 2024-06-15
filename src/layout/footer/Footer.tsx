import styled from "styled-components";
import { FlexWrapperStyled } from "../../components/FlexWrapperStyled";
import { Incons } from "../../components/icon/Icons";
import { myTheme } from "../../styles/Theme.styled";

export function Footer() {
    return (
        <StyledFooter>
            <FlexWrapperStyled gap="20px">
                <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <Incons iconId={"instagram"} width={"30px"} height={"30px"} viewBox={"0 0 23 23"}/>
                </Link>
                <Link href="https://web.telegram.org/" target="_blank" rel="noreferrer">
                    <Incons iconId={"telegram"} width={"30px"} height={"30px"} viewBox={"0 0 23 23"}/>
                </Link>
                <Link href="https://google.com/" target="_blank" rel="noreferrer">
                    <Incons iconId={"post"} width={"30px"} height={"30px"} viewBox={"0 0 15 15"}/>
                </Link>
                <Link href="https://linkedin.com/" target="_blank" rel="noreferrer">
                    <Incons iconId={"linkedin"} width={"30px"} height={"30px"} viewBox={"0 0 23 23"}/>
                </Link>
            </FlexWrapperStyled>
            <Copyright>© 2024 All Rights Reserved.</Copyright>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    margin: 0 auto;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

`
const Copyright = styled.small`
    color: ${myTheme.color.font.main};
`

const Link = styled.a`
    color: #2b2b2b;
    transition: 1s;
    &:hover {
        color: ${myTheme.color.accent};
        transform: translateY(-5px);
    }

`