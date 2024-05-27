import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: "row" | "column";
    justify?: string;
    align?: string;
    gap?: string;
    wrap?: "nowrap" | "wrap";
    width?: string;
    height?: string;
    padding?: string;
    bgc?: string;
    rowGap?: string;
    colGap?: string;
    
}

export const FlexWrapperStyled = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    gap: ${props => props.gap || "0px"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    padding: ${props => props.padding || "0px"};
    background-color: ${props => props.bgc};
`