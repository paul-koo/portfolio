import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: "ts" | "react" | "js" | "html" | "gitHub" | "git" | "css" | "styledComponents",
    width?: string,
    height?: string,
    viewBox?: string
}
export function Incons(props: IconPropsType) {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 120 120"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg> 
    )
}