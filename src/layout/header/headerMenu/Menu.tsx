import styled from "styled-components"
import { myTheme } from "../../../styles/Theme.styled"

export type MenuPropsType = {
    menuItems: Array<string>
}

export function Menu(props: MenuPropsType) {
    return (
        <MenuUl>
            {props.menuItems.map((elem) => {
                return (
                    <li>
                        <a href={`#${elem}`}>{elem}</a> 
                    </li>
                )
            })}
        </MenuUl>
    )
}


const MenuUl = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;

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
        height: 30%;
        border-radius: 0.2em;
        background-color: ${myTheme.color.accent};
        position: absolute;
        top: 70%;
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
