import styled from "styled-components"
import { SectionTitleStyled } from "../../../components/SectionTitleStyled"
import { Skill } from "../../../components/skill/Skill"
import { FlexWrapperStyled } from "../../../components/FlexWrapperStyled"

export function Skills() {
    return (
        <StyledSkills>
            <SectionTitleStyled>Skills</SectionTitleStyled>
            <FlexWrapperStyled wrap="wrap" gap="20px">
                <Skill iconId="js" iconViewBox="0 0 110 110" skillTitle="JavaScript" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="ts" skillTitle="JavaScript" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="html" iconViewBox="0 0 110 110" skillTitle="JavaScript" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="css" iconViewBox="0 0 110 110" skillTitle="JavaScript" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="react" iconViewBox="0 0 115 105" skillTitle="JavaScript" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="gitHub" iconViewBox="0 0 110 110" skillTitle="JavaScript" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="git" iconViewBox="0 0 110 110" skillTitle="JavaScript" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="styledComponents2" iconViewBox="0 4 24 15" skillTitle="JavaScript" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
            </FlexWrapperStyled>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 75px;
    background-color:rgba(91, 90, 90, 0.696);
`