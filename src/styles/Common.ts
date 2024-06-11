type FontPropsType = {
    Fmax: number | string,
    Fmin: number | string,
}

export const fontSize = (props: FontPropsType) => `calc( (100vw - 375px)/(1170 - 375) * (${props.Fmax} - ${props.Fmin}) + ${props.Fmin}px);`