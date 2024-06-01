import styled, { css } from "styled-components"
import { myTheme } from "../../../../styles/Theme.styled"

type MainButtonPropsType = {
    status: "active" | "inactive"
    text?: string
    href?: string
}

export function MainButton(props: MainButtonPropsType) {
    return (
        <Button href={`#${props.href}` || "#"} status={props.status}>
            {props.text}
        </Button>
    )
}

const Button = styled.a<MainButtonPropsType>`
    width: 115px;
    height: 45px;
    font-size: ${myTheme.fontSize.sectionDescription};
    font-weight: ${myTheme.fontWeight.bold};
    border-radius: 8px;
    text-align: center;
    align-content: center;
    
    ${props => props.status === "inactive" && css<MainButtonPropsType>`
        background-color: transparent;
        border: 2px solid ${myTheme.color.black.light};
        transition: 0.3s linear;



    `}
     
    ${props => props.status === "active" && css<MainButtonPropsType>`
        background-color: ${myTheme.color.yellow.main};
        color: ${myTheme.color.black.light};
        transition: 0.3s linear;



    `}

    &:hover {
            background-color: ${myTheme.color.black.light};
            color: ${myTheme.color.yellow.main};
            border: none;
            transition: 0.3s linear;
        } 
`