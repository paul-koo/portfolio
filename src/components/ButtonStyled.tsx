import styled, { css } from "styled-components"
import { myTheme } from "../styles/Theme.styled"

type ButtonStyledPropsType = {
    status: "active" | "inactive"
    text?: string
    href?: string
    minWidth?: string
    type?: "button" | "submit" | "reset"
    tag?: "a" | "button"
}

export function ButtonStyled(props: ButtonStyledPropsType) {
    return (
        <Button as={props.tag} href={`#${props.href}`} status={props.status} minWidth={props.minWidth} type={props.type}>
            {props.text}
            <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
        </Button>
    )
}

const Button = styled.button<ButtonStyledPropsType>`
    flex-grow: 0;
    min-width: ${props => props.minWidth};
    min-height: 45px;
    font-size: ${myTheme.fontSize.sectionDescription};
    font-weight: ${myTheme.fontWeight.bold};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    svg {
        margin-left: 10px;
    }
    
    ${props => props.status === "inactive" && css<ButtonStyledPropsType>`
        background-color: transparent;
        border: 2px solid ${myTheme.color.font.main};
        transition: 0.3s linear;



    `}
     
    ${props => props.status === "active" && css<ButtonStyledPropsType>`
        background-color: ${myTheme.color.accent};
        color: ${myTheme.color.font.main};
        transition: 0.3s linear;



    `}

    &:hover {
            background-color: ${myTheme.color.font.main};
            color: ${myTheme.color.accent};
            border: none;
            transition: 0.3s linear;
        }
        
    &:active {
        transform: translateY(-4px);
    }
`