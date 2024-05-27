import styled from "styled-components";
import { Incons } from "../icon/Icons";

type SkillPropsType = {
    iconId: "ts" | "react" | "js" | "html" | "gitHub" | "git" | "css" | "styledComponents" | "styledComponents2";
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string
    skillTitle: string
    skillPar: string
}

export function Skill(props: SkillPropsType) {
    return (
        <SkillWrapperStyled>
            <Incons iconId={props.iconId} width={props.iconWidth} height={props.iconHeight} viewBox={props.iconViewBox}/>
            <h3>{props.skillTitle}</h3>
            <p>{props.skillPar}</p>
        </SkillWrapperStyled>
    )
}

const SkillWrapperStyled = styled.div`
    display: flex;
    flex:1 1 auto;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    width: calc(100% / 4 - 15px);
    min-width: 240px;
    height: 250px;
    padding: 15px;
    background-color: rgb(241, 241, 241);    
`