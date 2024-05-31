import styled from "styled-components"
import { myTheme } from "../../styles/Theme.styled"

type MenuPropsType = {
    items: Array<string>
}

export function Menu(props: MenuPropsType) {
    return (
        <ul>
            {props.items.map((elem) => {
                return (
                    <li>
                        <a href={`#${props.items}`}>{elem}</a> 
                    </li>
                )
            })}
        </ul>
    )
}
