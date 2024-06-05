import styled from "styled-components";
import { FlexWrapperStyled } from "../../components/FlexWrapperStyled";
import { Incons } from "../../components/icon/Icons";
import { myTheme } from "../../styles/Theme.styled";

export function Footer() {
    return (
        <StyledFooter>
            <Name>Pavel</Name>
            <FlexWrapperStyled gap="20px">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <Incons iconId={"instagram"} width={"30px"} height={"30px"} viewBox={"0 0 23 23"}/>
                </a>
                <a href="https://web.telegram.org/" target="_blank" rel="noreferrer">
                    <Incons iconId={"telegram"} width={"30px"} height={"30px"} viewBox={"0 0 23 23"}/>
                </a>
                <a href="https://google.com/" target="_blank" rel="noreferrer">
                    <Incons iconId={"post"} width={"30px"} height={"30px"} viewBox={"0 0 23 23"}/>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                    <Incons iconId={"linkedin"} width={"30px"} height={"30px"} viewBox={"0 0 23 23"} fill={`${myTheme.color.black.light}`}/>
                </a>
            </FlexWrapperStyled>
            <Copyright>© 2024 All Rights Reserved.</Copyright>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px
`
const Name = styled.span`
    font-size: 15px;
    font-weight: bold;
`

const Copyright = styled.small`
    color: #767676;
`