import styled from "styled-components";
import { Incons } from "../../../../components/icon/Icons";
import { H3TitleStyled } from "../../../../components/H3TitleStyled";
import { H3DescriptionStyled } from "../../../../components/H3DescriptionStyled";

type SkillPropsType = {
    iconId: string;
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
            <H3TitleStyled>{props.skillTitle}</H3TitleStyled>
            <H3DescriptionStyled>{props.skillPar}</H3DescriptionStyled>
        </SkillWrapperStyled>
    )
}

const SkillWrapperStyled = styled.div`
    flex:1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    width: calc(100% / 3 - 20px);
    min-width: 240px;
    padding: 15px;
    background-color: rgb(241, 241, 241); 

    
    svg {
        flex-shrink: 0;
    }
`