import styled from "styled-components"
import { SectionTitleStyled } from "../../../components/SectionTitleStyled"
import { Skill } from "./skill/Skill"
import { FlexWrapperStyled } from "../../../components/FlexWrapperStyled"
import { SectionDescription } from "../../../components/SectionDescription"

export function Skills() {
    return (
        <StyledSkills>
            <SectionTitleStyled>Skills</SectionTitleStyled>
            <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
            <FlexWrapperStyled wrap="wrap" gap="20px">
                <Skill iconId="js" iconViewBox="0 0 110 110" iconWidth="75px" iconHeight="75px" skillTitle="JavaScript" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="ts" skillTitle="TypeScript" iconWidth="75px" iconHeight="75px" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="html5" iconViewBox="5 2 110 115" iconWidth="75px" iconHeight="75px" skillTitle="HTML5" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="css" iconViewBox="0 0 110 110" iconWidth="75px" iconHeight="75px" skillTitle="CSS" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="react" iconViewBox="0 0 115 105" iconWidth="75px" iconHeight="75px" skillTitle="React" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="gitHub" iconViewBox="-6 0 95 85" iconWidth="75px" iconHeight="75px" skillTitle="GitHub" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="git" iconViewBox="0 0 110 110" iconWidth="75px" iconHeight="75px" skillTitle="GIT" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                <Skill iconId="styledComponents" iconViewBox="0 10 24 1" iconWidth="75px" iconHeight="75px" skillTitle="StyledComponents" skillPar="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
            </FlexWrapperStyled>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`