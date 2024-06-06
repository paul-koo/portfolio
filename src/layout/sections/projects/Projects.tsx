import { FlexWrapperStyled } from "../../../components/FlexWrapperStyled";
import { SectionTitleStyled } from "../../../components/SectionTitleStyled";
import { Project } from "./project/Project";
import styled from "styled-components";
import { ProjectDataPropsType } from "../../../projectData";
import { DescriptionStyled } from "../../../components/DescriptionStyled";
import { SectionHeaderWrapperStyled } from "../../../components/SectionHeaderWrapperStyled";




export function Projects(props: {data: Array<ProjectDataPropsType>}) {
    return (
        <StyledProjects id="Projects">
            <SectionHeaderWrapperStyled>
                <SectionTitleStyled>Projects</SectionTitleStyled>
                <DescriptionStyled>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</DescriptionStyled>
            </SectionHeaderWrapperStyled>
            <FlexWrapperStyled direction="column" gap="50px">
                {props.data.map((elem) => {
                    return (
                        <Project data={elem}/>
                    )
                })}
            </FlexWrapperStyled>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`