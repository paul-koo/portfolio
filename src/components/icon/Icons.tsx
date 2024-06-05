import iconsSprite from '../../assets/images/icons-sprite.svg'


export type IconsPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string
    fill?: string
    stroke?: string
}
export function Incons(props: IconsPropsType) {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg> 
    )
}