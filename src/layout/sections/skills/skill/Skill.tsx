import styled from "styled-components";
import { Incons } from "../../../../components/icon/Icons";
import { H3TitleStyled } from "../../../../components/H3TitleStyled";
import { DescriptionStyled } from "../../../../components/DescriptionStyled";
import { myTheme } from "../../../../styles/Theme.styled";

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
            <DescriptionStyled>{props.skillPar}</DescriptionStyled>
        </SkillWrapperStyled>
    )
}

const SkillWrapperStyled = styled.div`
    flex:1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    width: 300px;
    aspect-ratio: 1/1;
    padding: 15px;
    background-color: ${myTheme.color.bgColor.secondary};
    text-align: center;

    @media screen and (max-width: 650px) {
        aspect-ratio: 2/1
    }
`