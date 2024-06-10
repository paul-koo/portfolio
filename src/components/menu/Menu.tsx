
export type MenuPropsType = {
    items: Array<string>
}

export function Menu(props: MenuPropsType) {
    return (
        <ul>
            {props.items.map((elem) => {
                return (
                    <li>
                        <a href={`#${elem}`}>{elem}</a> 
                    </li>
                )
            })}
        </ul>
    )
}
