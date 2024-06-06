import styled, { css } from "styled-components"
import { myTheme } from "../styles/Theme.styled"

type ButtonStyledPropsType = {
    status: "active" | "inactive"
    text?: string
    href?: string
    width?: string
    type?: "button" | "submit" | "reset"
    tag?: "a" | "button"
}

export function ButtonStyled(props: ButtonStyledPropsType) {
    return (
        <Button as={props.tag} href={`#${props.href}`} status={props.status} width={props.width} type={props.type}>
            {props.text}
        </Button>
    )
}

const Button = styled.button<ButtonStyledPropsType>`
    width: ${props => props.width || "115px"};
    height: 45px;
    font-size: ${myTheme.fontSize.sectionDescription};
    font-weight: ${myTheme.fontWeight.bold};
    border-radius: 8px;
    text-align: center;
    align-content: center;
    
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