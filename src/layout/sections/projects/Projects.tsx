import { FlexWrapperStyled } from "../../../components/FlexWrapperStyled";
import { SectionTitleStyled } from "../../../components/SectionTitleStyled";
import { Project } from "./project/Project";
import styled from "styled-components";
import { ProjectDataPropsType } from "../../../projectData";




export function Projects(props: {data: Array<ProjectDataPropsType>}) {
    return (
        <StyledProjects>
            <SectionTitleStyled>Projects</SectionTitleStyled>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    min-height: 100vh;
`

// imgSrc={elem.scrImg} title={elem.title} description={elem.description} alt={elem.alt}